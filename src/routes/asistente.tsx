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
      'Inspiracion y orientacion practica para tu proxima escapada por Uruguay con UruguayGo.',
    ),
  component: Assistant,
});

const MODELS = ['gemini-2.5-flash-lite', 'gemini-2.5-flash'];

const welcome: ChatMessage = {
  role: 'assistant',
  content:
    'Hola! Soy tu companero de viaje en **UruguayGo**. Preguntame por destinos clasicos o joyas ocultas como Las Grutas de Punta Ballena, Arboretum Lussich, San Gregorio de Polanco o Sierra de las Animas.',
};

const suggestions = [
  'Que lugares poco conocidos me recomendas?',
  'Contame sobre Las Grutas de Punta Ballena',
  'Armame una escapada de naturaleza y sierras',
  'Que hacer en Colonia o Cabo Polonio?',
];

function sanitizeHistory(history: ChatMessage[]): ChatMessage[] {
  return history
    .filter((msg) => (msg.role === 'user' || msg.role === 'assistant') && msg.content.trim().length > 0)
    .slice(-8)
    .map((msg) => ({
      role: msg.role,
      content: msg.content.trim().slice(0, 1500),
    }));
}

function buildSystemPrompt(): string {
  const catalog = destinations
    .map((d) => `${d.name} (${d.region}) [/destinos/${d.slug}]: ${d.description}`)
    .join('\n');

  return [
    'Sos el asistente turistico de UruguayGo. Responde en espanol claro, amable y util sobre turismo en Uruguay.',
    'Si mencionas un destino del catalogo, usa enlaces Markdown como [Nombre](/destinos/slug).',
    'Destinos:',
    catalog,
  ].join('\n');
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

  if (!response.ok) return null;

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
          <h1>Tu companero de aventura</h1>
          <p>
            {hasApiKey
              ? 'Asistente turistico de UruguayGo conectado a Google Gemini.'
              : 'Asistente turistico de UruguayGo (falta VITE_GEMINI_API_KEY en Vercel).'}
          </p>
        </div>
        <Button variant="ghost" size="icon" title="Nueva conversacion" aria-label="Nueva conversacion" onClick={reset}>
          <Trash2 />
        </Button>
      </div>

      <div className="chat-messages" aria-live="polite" aria-label="Conversacion">
        {messages.map((message, i) => (
          <div className={`chat-message ${message.role}`} key={i}>
            <ReactMarkdown
              components={{
                a: ({ href, children }) =>
                  href?.startsWith('/destinos/') ? (
                    <Link to={href as '/destinos/$slug'}>{children}</Link>
                  ) : (
                    <span>{children}</span>
                  ),
              }}
            >
              {message.content}
            </ReactMarkdown>
          </div>
        ))}
        {loading && <div className="chat-message assistant typing">Escribiendo...</div>}
        <div ref={bottom} />
      </div>

      <div className="suggestions">
        {suggestions.map((s) => (
          <Button key={s} variant="outline" size="sm" disabled={loading} onClick={() => send(s)}>
            {s}
          </Button>
        ))}
      </div>

      <form
        className="chat-compose"
        onSubmit={(e) => {
          e.preventDefault();
          send(input);
        }}
      >
        <input
          aria-label="Tu pregunta"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Preguntame por destinos, rutas o joyas ocultas..."
          maxLength={2000}
        />
        <Button type="submit" size="icon" aria-label="Enviar pregunta" disabled={!input.trim() || loading}>
          <Send />
        </Button>
      </form>

      <p className="chat-disclaimer">
        Asistente de viaje de UruguayGo · Verifica horarios y accesos antes de viajar.
      </p>
    </main>
  );
}
