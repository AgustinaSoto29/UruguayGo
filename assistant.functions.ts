import { createServerFn } from '@tanstack/react-start';
import { z } from 'zod';
import { buildSystemPrompt, sanitizeHistory } from './assistant-prompt';

const MODEL = 'gemini-2.5-flash';
const TIMEOUT_MS = 25_000;

export type AssistantFailure = 'not_configured' | 'rate_limited' | 'credits' | 'unavailable';
export type AssistantResult = { ok: true; reply: string } | { ok: false; reason: AssistantFailure };

const input = z.object({
  messages: z
    .array(z.object({ role: z.enum(['user', 'assistant']), content: z.string().max(4000) }))
    .min(1)
    .max(40),
});

function getGeminiApiKey(): string | undefined {
  const serverKey = typeof process !== 'undefined' ? process.env?.GEMINI_API_KEY?.trim() : undefined;
  if (serverKey) return serverKey;
  const viteKey =
    typeof import.meta !== 'undefined'
      ? (import.meta as unknown as { env?: Record<string, string | undefined> }).env?.VITE_GEMINI_API_KEY?.trim()
      : undefined;
  return viteKey || undefined;
}

export const askAssistant = createServerFn({ method: 'POST' })
  .inputValidator((data: unknown) => input.parse(data))
  .handler(async ({ data }): Promise<AssistantResult> => {
    const apiKey = getGeminiApiKey();
    if (!apiKey) return { ok: false, reason: 'not_configured' };

    const history = sanitizeHistory(data.messages);
    if (!history.length) return { ok: false, reason: 'unavailable' };

    const contents = history.map((msg) => ({
      role: msg.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: msg.content }],
    }));

    const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent?key=${encodeURIComponent(apiKey)}`;

    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        signal: controller.signal,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          systemInstruction: {
            parts: [{ text: buildSystemPrompt() }],
          },
          contents,
        }),
      });

      if (response.status === 429) return { ok: false, reason: 'rate_limited' };
      if (response.status === 402 || response.status === 403) return { ok: false, reason: 'credits' };
      if (!response.ok) {
        const errorBody = await response.text().catch(() => '');
        console.error('Gemini native API error', response.status, errorBody);
        return { ok: false, reason: 'unavailable' };
      }

      const json = (await response.json()) as {
        candidates?: { content?: { parts?: { text?: string }[] } }[];
      };

      const reply = json.candidates?.[0]?.content?.parts
        ?.map((part) => part.text ?? '')
        .join('')
        .trim();

      return reply ? { ok: true, reply } : { ok: false, reason: 'unavailable' };
    } catch (error) {
      console.error('Gemini native API request failed', error);
      return { ok: false, reason: 'unavailable' };
    } finally {
      clearTimeout(timer);
    }
  });