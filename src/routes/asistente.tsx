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
    '¡Hola! Soy tu compañero de viaje en **UruguayGo**. Preguntame por destinos clasicos o joyas ocultas como Las Grutas de Punta Ballena, Arboretum Lussich, San Gregorio de Polanco o Sierra de las Animas.',
};

const suggestions = [
  '¿Qué lugares poco conocidos me recomendás?',
  'Contame sobre Las Grutas de Punta Ballena',
  'Armame una escapada de naturaleza y sierras',
  '¿Qué hacer en Colonia o Cabo Polonio?',
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
    ?.map((p) => p
