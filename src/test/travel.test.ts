import { describe, expect, it } from 'vitest';
import { categories, destinations, filterDestinations } from '@/lib/destinations';
import { replyToTraveler } from '@/lib/travel-assistant';
describe('Explorador de Uruguay',()=>{
 it.each(['Punta del Este','Colonia del Sacramento','Cabo Polonio','Piriápolis','La Paloma','Montevideo'])('incluye %s',name=>{expect(destinations.some(d=>d.name===name)).toBe(true)});
 it.each(categories)('filtra por %s',category=>{const results=filterDestinations('',category);expect(results.length).toBeGreaterThan(0);expect(results.every(d=>d.categories.includes(category))).toBe(true);expect(results.length).toBeLessThan(destinations.length)});
 it('busca nombres sin depender de tildes',()=>expect(filterDestinations('piriapolis','').map(d=>d.slug)).toEqual(['piriapolis']));
 it('combina búsqueda y categoría',()=>expect(filterDestinations('colonia','Playas')).toEqual([]));
});
describe('Asistente sin integraciones',()=>{
 it('recuerda el destino del turno anterior para preguntas de transporte',()=>{const response=replyToTraveler([{role:'user',content:'Quiero conocer Cabo Polonio'},{role:'assistant',content:'Un gran destino'},{role:'user',content:'¿Cómo llegar?'}]);expect(response).toContain('vehículos autorizados');expect(response).toContain('Cabo Polonio')});
 it('no inventa información en tiempo real',()=>expect(replyToTraveler([{role:'user',content:'¿Qué horarios hay hoy?'}])).toContain('No tengo precios, horarios ni clima en tiempo real'));
});
