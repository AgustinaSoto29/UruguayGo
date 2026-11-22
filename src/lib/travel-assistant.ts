import { categories, destinations, normalize } from './destinations';

export type ChatMessage = { role: 'user' | 'assistant'; content: string };

export function replyToTraveler(history: ChatMessage[]): string {
  const latest = history.filter((m) => m.role === 'user').at(-1)?.content || '';
  const text = normalize(latest);
  const previous = history
    .filter((m) => m.role === 'user')
    .slice(0, -1)
    .reverse();

  const direct = destinations.find(
    (d) =>
      text.includes(normalize(d.name)) ||
      text.includes(d.slug.replaceAll('-', ' ')) ||
      (d.slug === 'colonia-del-sacramento' && text.includes('colonia')),
  );

  const contextual = previous
    .map((m) => destinations.find((d) => normalize(m.content).includes(normalize(d.name))))
    .find(Boolean);

  const d = direct || contextual;

  const transport = /lleg|transporte|omnibus|bus|auto|viajar desde|como ir/.test(text);
  const tips = /consej|llevar|precaucion|recomenda|cuando ir|epoca/.test(text);
  const activities = /actividad|actividades|hacer|atractiv|visitar|conocer|plan/.test(text);

  if (/precio|horario|hoy|clima|tiempo real|reserva|tarifa/.test(text)) {
    return 'No manejo precios, horarios ni clima en tiempo real. Te conviene confirmarlos con el prestador o la oficina de turismo local antes de salir. Mientras tanto, puedo orientarte sobre **destinos, planes y cómo llegar** en Uruguay.';
  }

  if (d) {
    const link = `[Ver la guía de ${d.name}](/destinos/${d.slug})`;
    if (transport) {
      return `### Cómo llegar a ${d.name}\n\n${d.transport}\n\n${link}\n\nLas frecuencias y accesos pueden variar según la temporada o el clima; confirmalos antes de salir.`;
    }
    if (tips) {
      return `### Un consejo para ${d.name}\n\n${d.tip}\n\n**Cuándo ir:** ${d.season}.\n\n${link}`;
    }
    return `### ${d.name}, ${d.region}\n\n${activities ? 'Estos son algunos planes para disfrutar:' : d.description}\n\n${d.activities.map((a) => `- ${a}`).join('\n')}\n\n${link}\n\n¿Querés saber cómo llegar, cuándo ir o qué llevar?`;
  }

  const category =
    categories.find((c) => text.includes(normalize(c))) ||
    (/playa|mar|surf|costa/.test(text)
      ? 'Playas'
      : /sender|camin|aventura|sierra/.test(text)
        ? 'Aventura'
        : /histori|patrimonio|colonial/.test(text)
          ? 'Historia'
          : /cultur|arte|museo/.test(text)
            ? 'Cultura'
            : /natural|verde|reserva|parque/.test(text)
              ? 'Naturaleza'
              : undefined);

  if (category) {
    const options = destinations.filter((dest) => dest.categories.includes(category)).slice(0, 3);
    if (options.length > 0) {
      return `Para disfrutar de **${category.toLowerCase()}**, te propongo:\n\n${options
        .map((x) => `- **[${x.name}](/destinos/${x.slug})**, ${x.region}: ${x.activities[0]?.toLowerCase() ?? x.description}.`)
        .join('\n')}\n\nContame qué lugar te llama más la atención y te doy detalles para armar tu salida.`;
    }
  }

  if (transport) {
    return 'Desde **Montevideo**, la terminal de Tres Cruces concentra la mayoría de las conexiones hacia el interior. Para playas agrestes, sierras o reservas naturales, a veces conviene combinar ómnibus con traslados locales o auto.\n\n¿A qué destino querés llegar? Puedo orientarte sobre Cabo Polonio, Colonia, Punta del Este, Montevideo y otros lugares del catálogo.';
  }

  if (/gracias/.test(text)) {
    return '¡De nada! Si querés armar una escapada, ver opciones cerca de una base o saber cómo llegar a algún lugar, acá sigo.';
  }

  if (/hola|buenas/.test(text)) {
    return '¡Hola! Qué lindo que estés organizando un viaje por Uruguay. ¿Tenés ganas de **playa**, una escapada de **naturaleza**, o un paseo de **cultura e historia**?';
  }

  return 'Puedo orientarte con destinos, ideas de escapadas y cómo moverte por Uruguay. Probá preguntarme **qué hacer en Colonia**, **cómo llegar a Cabo Polonio** o **qué playas visitar**.\n\nRecordá verificar siempre horarios, accesos y frecuencias de transporte antes de viajar.';
}
