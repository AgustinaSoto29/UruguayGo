import { createFileRoute, Link } from '@tanstack/react-router';
import { useEffect, useRef, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { Send, Sparkles, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { destinations, pageHead } from '@/lib/destinations';
import { replyToTraveler, type ChatMessage } from '@/lib/travel-assistant';

export const Route = createFileRoute('/asistente')({
  head: () =>
    pageHead(
      'Tu asistente de viaje',
      'Inspiración y orientación práctica para tu próxima escapada por Uruguay, con un asistente de inteligencia artificial basado en las guías de UruguayGo.',
    ),
  component: Assistant,
});

const MODELS = ['gemini-2.5-flash', 'gemini-2.0-flash'];

const welcome: ChatMessage = {
  role: 'assistant',
  content:
    '¡Hola! Soy tu compañero de viaje en **UruguayGo** ☀️\n\nPuedo recomendarte destinos clásicos o lugares poco conocidos de Uruguay (como **Las Grutas de Punta Ballena**, el **Arboretum Lussich**, **San Gregorio de Polanco** o **Sierra de las Ánimas**). ¿Qué te gustaría descubrir?',
};

const suggestions = [
  '¿Qué lugares poco conocidos de Uruguay me recomendás?',
  'Contame sobre Las Grutas de Punta Ballena y el Arboretum Lussich',
  'Armame una escapada de naturaleza y sierras',
  '¿Qué hacer en Colonia o Cabo Polonio?',
];

function sanitizeHistory(history: ChatMessage[]): ChatMessage[] {
  return history
    .filter((msg) => (msg.role === 'user' || msg.role === 'assistant') && msg.content.trim().length > 0)
    .slice(-10)
    .map((msg) => ({
      role: msg.role,
      content: msg.content.trim().slice(0, 2000),
    }));
}

function buildSystemPrompt(): string {
  const catalog = destinations
    .map((d) => `- ${d.name} (${d.region}) [/destinos/${d.slug}]: ${d.description} | Categorías: ${d.categories.join(', ')} | Mejor época: ${d.season}`)
    .join('\n');

  return [
    'Sos el asistente turístico oficial de UruguayGo.',
    'Respondé siempre en español rioplatense cercano, claro y útil, enfocado en turismo en Uruguay.',
    'Cuando menciones un destino del catálogo, podés enlazarlo usando Markdown como [Nombre](/destinos/slug).',
    'Si el usuario pregunta por joyas ocultas o lugares poco conocidos, priorizá los destinos de la categoría "Joyas ocultas".',
    'Catálogo disponible:\n' + catalog,
  ].join('\n\n');
}

async function tryModel(
  model: string,
  apiKey: string,
  systemPrompt: string,
  contents: { role: string; parts: { text: string }[] }[],
): Promise<string | null> {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${encodeURIComponent(apiKey)}`;
  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      systemInstruction: { parts: [{ text: systemPrompt }] },
      contents,
    }),
  });

  if (!response.ok) {
    return null;
  }

  const data = (await response.json()) as {
    candidates?: { content?: { parts?: { text?: string }[] } }[];
  };

  const text = data.candidates?.[0]?.content?.parts
    ?.map((p) => p.text ?? '')
    .join('')
    .trim();

  return text || null;
}

async function callGeminiDirect(history: ChatMessage[]): Promise<string | null> {
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY?.trim();
  if (!apiKey) return null;

  const clean = sanitizeHistory(history);
  if (!clean.length) return null;

  const systemPrompt = buildSystemPrompt();
  const contents = clean.map((msg) => ({
    role: msg.role === 'assistant' ? 'model' : 'user',
    parts: [{ text: msg.content }],
  }));

  for (const model of MODELS) {
    const reply = await tryModel(model, apiKey, systemPrompt, contents);
    if (reply) return reply;
  }

  return null;
}

function Assistant() {
  const hasApiKey = Boolean(import.meta.env.VITE_GEMINI_API_KEY?.trim());
  const [messages, setMessages] = useState<ChatMessage[]>([welcome]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const bottom = useRef<HTMLDivElement>(null);
  const session = useRef(0);

  useEffect(() => {
    if (messages.length > 1 || loading) {
      bottom.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }, [messages, loading]);

  async function send(value: string) {
    const text = value.trim();
    if (!text || loading) return;
    const history: ChatMessage[] = [...messages, { role: 'user', content: text }];
    const current = session.current;
    setMessages(history);
    setInput('');
    setLoading(true);

    let reply: string;
    try {
      const aiReply = await callGeminiDirect(history.slice(1));
      reply = aiReply ?? replyToTraveler(history);
    } catch {
      reply = replyToTraveler(history);
    }

    if (session.current !== current) return;
    setMessages([...history, { role: 'assistant', content: reply }]);
    setLoading(false);
  }

  function reset() {
    session.current += 1;
    setMessages([welcome]);
    setLoading(false);
  }

  return (
    <main className="chat-page">
      <div className="chat-title">
        <span className="assistant-icon">
          <Sparkles size={25} />
        </span>
        <div className="flex-1">
          <h1>Tu compañero de aventura</h1>
          <p>
            {hasApiKey
              ? 'Asistente turístico de UruguayGo conectado a Google Gemini.'
              : 'Asistente turístico de UruguayGo (modo guía local; faltaría configurar VITE_GEMINI_API
