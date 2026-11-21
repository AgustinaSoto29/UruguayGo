import { createServerFn } from '@tanstack/react-start';
import { z } from 'zod';
import { buildSystemPrompt, sanitizeHistory } from './assistant-prompt';

// Conexión directa a la API oficial de Google Gemini desde el servidor:
// GEMINI_API_KEY nunca se expone en el código del navegador.
const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/openai/chat/completions';
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

export const askAssistant = createServerFn({ method: 'POST' })
  .inputValidator((data: unknown) => input.parse(data))
  .handler(async ({ data }): Promise<AssistantResult> => {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) return { ok: false, reason: 'not_configured' };

    const history = sanitizeHistory(data.messages);
    if (!history.length) return { ok: false, reason: 'unavailable' };

    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);
    try {
      const response = await fetch(GEMINI_API_URL, {
        method: 'POST',
        signal: controller.signal,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: MODEL,
          messages: [{ role: 'system', content: buildSystemPrompt() }, ...history],
        }),
      });
      if (response.status === 429) return { ok: false, reason: 'rate_limited' };
      if (response.status === 402 || response.status === 403) return { ok: false, reason: 'credits' };
      if (!response.ok) {
        console.error('Gemini API error', response.status, await response.text());
        return { ok: false, reason: 'unavailable' };
      }
      const json = (await response.json()) as { choices?: { message?: { content?: string } }[] };
      const reply = json.choices?.[0]?.message?.content?.trim();
      return reply ? { ok: true, reply } : { ok: false, reason: 'unavailable' };
    } catch (error) {
      console.error('Gemini API request failed', error);
      return { ok: false, reason: 'unavailable' };
    } finally {
      clearTimeout(timer);
    }
  });