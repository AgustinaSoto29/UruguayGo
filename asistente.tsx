import { createFileRoute, Link } from '@tanstack/react-router';
import { useEffect, useRef, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { Send, Sparkles, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { pageHead } from '@/lib/destinations';
import { replyToTraveler, type ChatMessage } from '@/lib/travel-assistant';
import { askAssistant, type AssistantFailure } from '@/lib/assistant.functions';

export const Route = createFileRoute('/asistente')({
  head: () =>
    pageHead(
      'Tu asistente de viaje',
      'Inspiración y orientación práctica para tu próxima escapada por Uruguay, con un asistente de inteligencia artificial basado en las guías de UruguayGo.',
    ),
  component: Assistant,
});

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

const failureNotice: Record<AssistantFailure, string> = {
  not_configured:
    '⚠️ No se detectó `GEMINI_API_KEY` en las variables de entorno del servidor. Mientras tanto, te comparto una orientación rápida de la guía:',
  rate_limited:
    '⏳ Se alcanzó el límite temporal de consultas de la API de Gemini. Probá de nuevo en unos segundos; mientras tanto, aquí tenés una guía rápida:',
  credits:
    '🔑 La clave `GEMINI_API_KEY` fue rechazada o no tiene permisos activos en Google AI Studio. Revisá que la clave sea válida y esté guardada en Vercel:',
  unavailable:
    '📡 Hubo un problema temporal al conectar con Gemini. Reintentá en un momento; aquí tenés una respuesta base de la guía:',
};

function Assistant() {
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
      const result = await askAssistant({ data: { messages: history.slice(1) } });
      reply = result.ok ? result.reply : `${failureNotice[result.reason]}\n\n${replyToTraveler(history)}`;
    } catch {
      reply = `${failureNotice.unavailable}\n\n${replyToTraveler(history)}`;
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
          <p>Asistente turístico de UruguayGo conectado a Google Gemini.</p>
        </div>
        <Button variant="ghost" size="icon" title="Nueva conversación" aria-label="Nueva conversación" onClick={reset}>
          <Trash2 />
        </Button>
      </div>

      <div className="chat-messages" aria-live="polite" aria-label="Conversación">
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
        {loading && <div className="chat-message assistant typing">Escribiendo…</div>}
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
          placeholder="Preguntame por destinos, rutas o joyas ocultas de Uruguay..."
          maxLength={2000}
        />
        <Button type="submit" size="icon" aria-label="Enviar pregunta" disabled={!input.trim() || loading}>
          <Send />
        </Button>
      </form>

      <p className="chat-disclaimer">
        Asistente de viaje de UruguayGo impulsado por Google Gemini · Confirmá horarios, transporte y accesos antes de viajar.
      </p>
    </main>
  );
}