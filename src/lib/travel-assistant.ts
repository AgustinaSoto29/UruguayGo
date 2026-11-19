import { categories, destinations, normalize } from './destinations';
export type ChatMessage={role:'user'|'assistant';content:string};
export function replyToTraveler(history:ChatMessage[]):string {
 const latest=history.filter(m=>m.role==='user').at(-1)?.content||'';
 const text=normalize(latest);
 const previous=history.filter(m=>m.role==='user').slice(0,-1).reverse();
 const direct=destinations.find(d=>text.includes(normalize(d.name))||text.includes(d.slug.replaceAll('-',' '))||(d.slug==='colonia-del-sacramento'&&text.includes('colonia')));
 const contextual=previous.map(m=>destinations.find(d=>normalize(m.content).includes(normalize(d.name)))).find(Boolean);
 const d=direct||contextual;
 const transport=/lleg|transporte|omnibus|bus|auto|viajar desde/.test(text);
 const tips=/consej|llevar|precaucion|recomenda/.test(text);
 const activities=/actividad|actividades|hacer|atractiv|visitar/.test(text);
 if(/precio|horario|hoy|clima|tiempo real|reserva/.test(text)) return 'No tengo precios, horarios ni clima en tiempo real. Confirmalos con el prestador o la oficina de turismo antes de viajar. Puedo orientarte sobre **destinos, actividades y cómo llegar** con la información de esta versión.';
 if(d){const link=`[Ver la guía de ${d.name}](/destinos/${d.slug})`;if(transport)return `### Cómo llegar a ${d.name}\n\n${d.transport}\n\n${link}\n\nLas frecuencias pueden variar según la temporada; confirmalas antes de salir.`;if(tips)return `### Un consejo para ${d.name}\n\n${d.tip}\n\n**Cuándo ir:** ${d.season}.\n\n${link}`;return `### ${d.name}, ${d.region}\n\n${activities?'Estos son algunos planes para disfrutar:':d.description}\n\n${d.activities.map(a=>`- ${a}`).join('\n')}\n\n${link}\n\n¿Querés saber cómo llegar o qué llevar?`;}
 const category=categories.find(c=>text.includes(normalize(c))) || (/playa|mar|surf/.test(text)?'Playas':/sender|camin|aventura/.test(text)?'Aventura':/comer|vino|gastronom/.test(text)?'Gastronomía':/histori/.test(text)?'Historia':/natural|verde/.test(text)?'Naturaleza':undefined);
 if(category){const options=destinations.filter(d=>d.categories.includes(category)).slice(0,3);return `Para disfrutar de **${category.toLowerCase()}**, te propongo:\n\n${options.map(x=>`- **[${x.name}](/destinos/${x.slug})**, ${x.region}: ${x.activities[0]?.toLowerCase()}.`).join('\n')}\n\nContame qué destino te interesa y te doy más detalles.`;}
 if(transport)return 'Desde **Montevideo**, la terminal Tres Cruces concentra muchas conexiones hacia el interior. Los accesos a parques y pueblos costeros pueden requerir traslados adicionales.\n\n¿A qué destino querés llegar? Puedo orientarte sobre Cabo Polonio, Colonia, Punta del Este, Montevideo y los demás lugares del explorador.';
 if(/hola|buenas|gracias/.test(text))return '¡Hola! Qué lindo que estés por descubrir Uruguay. ¿Tenés ganas de **playa**, una escapada de **naturaleza**, o un paseo de **cultura y gastronomía**?';
 return 'Puedo orientarte con las guías de esta primera versión de UruguayGo. Probá preguntarme **qué hacer en Colonia**, **cómo llegar a Cabo Polonio** o **qué playas visitar**.\n\nTodavía no soy un asistente con inteligencia artificial conectada: mis respuestas se basan en información de ejemplo, sin datos en tiempo real.';
}
