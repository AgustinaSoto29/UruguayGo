import hero from '@/assets/hero.webp.asset.json';
import punta from '@/assets/punta-del-este.webp.asset.json';
import colonia from '@/assets/colonia.webp.asset.json';
import cabo from '@/assets/cabo-polonio.webp.asset.json';
import piriapolis from '@/assets/piriapolis.webp.asset.json';
import paloma from '@/assets/la-paloma.webp.asset.json';
import montevideo from '@/assets/montevideo.webp.asset.json';
import diablo from '@/assets/punta-del-diablo.webp.asset.json';
import quebrada from '@/assets/quebrada-cuervos.webp.asset.json';
import lunarejo from '@/assets/lunarejo.webp.asset.json';
import carmelo from '@/assets/carmelo.webp.asset.json';
import termas from '@/assets/termas-salto.webp.asset.json';
import jose from '@/assets/jose-ignacio.webp.asset.json';

export const heroImage = hero.url;
export const categories = ['Playas', 'Naturaleza', 'Aventura', 'Cultura', 'Historia', 'Gastronomía', 'Joyas ocultas'] as const;
export type Category = typeof categories[number];

export type Destination = {
  slug: string;
  name: string;
  region: string;
  image: string;
  categories: Category[];
  description: string;
  attractions: string[];
  activities: string[];
  transport: string;
  tip: string;
  season: string;
  rating: string;
};

export const destinations: Destination[] = [
  {
    slug: 'cabo-polonio',
    name: 'Cabo Polonio',
    region: 'Rocha',
    image: cabo.url,
    categories: ['Playas', 'Naturaleza', 'Aventura'],
    description: 'Un rincón donde el tiempo baja un cambio. Dunas inmensas, casitas frente al mar y noches de cielo estrellado hacen de Cabo Polonio un lugar para desconectar de verdad.',
    attractions: ['Faro de Cabo Polonio', 'Reserva de lobos marinos', 'Playa Sur y Playa La Calavera'],
    activities: ['Caminar entre las dunas', 'Observar fauna a distancia', 'Disfrutar del cielo nocturno'],
    transport: 'Desde Montevideo, ómnibus por la ruta 9 hasta la terminal de acceso sobre la ruta 10. Desde allí se ingresa en vehículos autorizados; los autos particulares quedan afuera del parque.',
    tip: 'Llevá efectivo, linterna y una botella reutilizable. La electricidad y la conectividad son limitadas. No te acerques a los lobos marinos.',
    season: 'Noviembre a marzo',
    rating: '4.9',
  },
  {
    slug: 'colonia-del-sacramento',
    name: 'Colonia del Sacramento',
    region: 'Colonia',
    image: colonia.url,
    categories: ['Cultura', 'Historia', 'Gastronomía'],
    description: 'Calles empedradas, fachadas llenas de historias y atardeceres sobre el Río de la Plata. Su Barrio Histórico, Patrimonio Mundial, invita a perderse sin apuro.',
    attractions: ['Barrio Histórico', 'Calle de los Suspiros', 'Faro y Puerta de la Ciudadela'],
    activities: ['Recorrer los museos', 'Pasear por el puerto', 'Probar sabores locales'],
    transport: 'Ómnibus desde Tres Cruces por la ruta 1 o ferry desde Buenos Aires. El Barrio Histórico se recorre cómodamente a pie desde el puerto y la terminal.',
    tip: 'Usá calzado cómodo para los adoquines y reservá un rato para ver el atardecer junto al río.',
    season: 'Todo el año',
    rating: '4.9',
  },
  {
    slug: 'punta-del-este',
    name: 'Punta del Este',
    region: 'Maldonado',
    image: punta.url,
    categories: ['Playas', 'Cultura', 'Gastronomía'],
    description: 'Donde el río se encuentra con el océano. Playas para todos los ritmos, arte a cielo abierto y una península que siempre tiene algo nuevo para descubrir.',
    attractions: ['Los Dedos en Playa Brava', 'Puerto de Punta del Este', 'Casapueblo, en Punta Ballena'],
    activities: ['Elegir entre Playa Mansa y Brava', 'Pasear por la península', 'Disfrutar de la gastronomía del puerto'],
    transport: 'Ómnibus frecuentes desde Montevideo por la ruta Interbalnearia. También se puede llegar al aeropuerto de Laguna del Sauce y continuar por carretera.',
    tip: 'En verano reservá alojamiento con anticipación. Respetá las banderas de playa: el oleaje de la Brava puede ser fuerte.',
    season: 'Diciembre a marzo',
    rating: '4.8',
  },
  {
    slug: 'piriapolis',
    name: 'Piriápolis',
    region: 'Maldonado',
    image: piriapolis.url,
    categories: ['Playas', 'Aventura', 'Historia'],
    description: 'Mar y cerros en una misma escapada. Una rambla clásica, arquitectura con historia y panorámicas que recompensan cada paso.',
    attractions: ['Cerro San Antonio', 'Argentino Hotel', 'Cerro Pan de Azúcar'],
    activities: ['Caminar por la rambla', 'Subir al mirador', 'Pasar la tarde en la playa'],
    transport: 'Ómnibus directos desde Montevideo por la ruta Interbalnearia y accesos al balneario. En auto se llega por las rutas 37 o 10.',
    tip: 'Para subir a los cerros llevá agua y calzado con agarre; consultá antes el estado de los senderos.',
    season: 'Octubre a abril',
    rating: '4.7',
  },
  {
    slug: 'la-paloma',
    name: 'La Paloma',
    region: 'Rocha',
    image: paloma.url,
    categories: ['Playas', 'Aventura', 'Naturaleza'],
    description: 'El sonido del océano marca el ritmo de este balneario rochense. Un faro emblemático, playas extensas y una cultura de surf que se vive todo el año.',
    attractions: ['Faro del Cabo Santa María', 'Playa La Balconada', 'Bahía Chica'],
    activities: ['Tomar una clase de surf', 'Ver el atardecer en La Balconada', 'Recorrer la costa en bicicleta'],
    transport: 'Ómnibus desde Montevideo y la ciudad de Rocha. En auto, ruta 9 hasta Rocha y luego ruta 15 hacia la costa.',
    tip: 'Elegí la playa según el viento y el oleaje. Si recién empezás a surfear, buscá una escuela local.',
    season: 'Noviembre a marzo',
    rating: '4.8',
  },
  {
    slug: 'montevideo',
    name: 'Montevideo',
    region: 'Montevideo',
    image: montevideo.url,
    categories: ['Cultura', 'Historia', 'Gastronomía'],
    description: 'Una capital que se disfruta caminando. Mate en la rambla, candombe en los barrios y cafés donde siempre hay tiempo para una charla.',
    attractions: ['Ciudad Vieja y Teatro Solís', 'Rambla de Montevideo', 'Mercado del Puerto'],
    activities: ['Recorrer museos y galerías', 'Probar un chivito', 'Pasear por Parque Rodó'],
    transport: 'El aeropuerto de Carrasco conecta con la ciudad por ómnibus y traslados. La terminal Tres Cruces concentra conexiones nacionales. Dentro de la ciudad hay una amplia red de ómnibus.',
    tip: 'Llevá una campera para el viento de la rambla y cuidá tus pertenencias como en cualquier ciudad.',
    season: 'Todo el año',
    rating: '4.7',
  },
  {
    slug: 'punta-del-diablo',
    name: 'Punta del Diablo',
    region: 'Rocha',
    image: diablo.url,
    categories: ['Playas', 'Gastronomía', 'Aventura'],
    description: 'Barcos de pescadores, casitas de colores y espíritu libre. Un pueblo costero para disfrutar del mar y de los sabores de la pesca local.',
    attractions: ['Playa de los Pescadores', 'Playa del Rivero', 'Playa de la Viuda'],
    activities: ['Surfear en El Rivero', 'Probar pescado fresco', 'Caminar por la costa'],
    transport: 'Por ruta 9 y el acceso al balneario. Hay ómnibus desde Montevideo, con frecuencias que varían según la temporada.',
    tip: 'En temporada baja algunos servicios reducen horarios. Consultá antes de viajar.',
    season: 'Diciembre a marzo',
    rating: '4.8',
  },
  {
    slug: 'quebrada-de-los-cuervos',
    name: 'Quebrada de los Cuervos',
    region: 'Treinta y Tres',
    image: quebrada.url,
    categories: ['Naturaleza', 'Aventura', 'Joyas ocultas'],
    description: 'Un paisaje inesperado de barrancas, monte nativo y arroyos. Una invitación a caminar despacio y escuchar la naturaleza del este uruguayo.',
    attractions: ['Mirador de la quebrada', 'Monte nativo', 'Arroyo Yerbal Chico'],
    activities: ['Senderismo por circuitos habilitados', 'Avistamiento de aves', 'Fotografía de naturaleza'],
    transport: 'Desde la ciudad de Treinta y Tres por ruta 8 y caminos de acceso rurales. Conviene contar con vehículo o contratar un traslado local.',
    tip: 'Confirmá condiciones de acceso y apertura. No abandones los senderos ni dejes residuos.',
    season: 'Otoño y primavera',
    rating: '4.9',
  },
  {
    slug: 'valle-del-lunarejo',
    name: 'Valle del Lunarejo',
    region: 'Rivera',
    image: lunarejo.url,
    categories: ['Naturaleza', 'Aventura', 'Joyas ocultas'],
    description: 'Cerros de cima plana, quebradas y un verde que parece infinito. El norte guarda paisajes y encuentros que sorprenden.',
    attractions: ['Cerros y quebradas', 'Saltos de agua', 'Monte de quebrada'],
    activities: ['Caminatas con guías locales', 'Cabalgatas', 'Observación de aves'],
    transport: 'Se accede desde la ruta 30, cerca de Tranqueras. Las visitas a distintos predios y senderos se coordinan con anfitriones o guías de la zona.',
    tip: 'Coordiná la visita con anticipación: varios recorridos atraviesan predios privados.',
    season: 'Otoño y primavera',
    rating: '4.9',
  },
  {
    slug: 'carmelo',
    name: 'Carmelo',
    region: 'Colonia',
    image: carmelo.url,
    categories: ['Gastronomía', 'Cultura', 'Naturaleza'],
    description: 'Viñedos, caminos tranquilos y tardes junto al río. Carmelo es una pausa para descubrir vinos uruguayos y la hospitalidad del litoral.',
    attractions: ['Bodegas de la zona', 'Puente giratorio', 'Playa Seré'],
    activities: ['Visitar bodegas con reserva', 'Pasear en bicicleta', 'Probar vinos Tannat'],
    transport: 'Desde Montevideo por rutas 1 y 21, con servicios de ómnibus a Carmelo. Para visitar bodegas conviene coordinar un traslado.',
    tip: 'Reservá las visitas a bodegas y elegí transporte con conductor si vas a degustar vinos.',
    season: 'Todo el año',
    rating: '4.8',
  },
  {
    slug: 'termas-del-dayman',
    name: 'Termas del Daymán',
    region: 'Salto',
    image: termas.url,
    categories: ['Naturaleza'],
    description: 'Agua cálida, palmeras y descanso en el litoral. Una escapada para aflojar el ritmo y disfrutar al aire libre.',
    attractions: ['Complejos termales', 'Entorno del río Daymán', 'Ciudad de Salto'],
    activities: ['Disfrutar de piscinas termales', 'Pasear por Salto', 'Descansar en espacios verdes'],
    transport: 'Ómnibus desde Montevideo hacia Salto; desde la ciudad hay transporte local a Daymán. En auto se accede por ruta 3.',
    tip: 'Hidratate, alterná baños con descansos y consultá indicaciones médicas si tenés una condición de salud.',
    season: 'Todo el año',
    rating: '4.7',
  },
  {
    slug: 'jose-ignacio',
    name: 'José Ignacio',
    region: 'Maldonado',
    image: jose.url,
    categories: ['Playas', 'Gastronomía', 'Naturaleza'],
    description: 'Un faro, dos playas y una forma especial de vivir el verano. Paisajes abiertos y buena mesa en un pequeño pueblo junto al Atlántico.',
    attractions: ['Faro de José Ignacio', 'Playa Mansa', 'Playa Brava'],
    activities: ['Caminar por el pueblo', 'Disfrutar de la cocina costera', 'Observar aves en las lagunas cercanas'],
    transport: 'Desde Punta del Este por ruta 10 hacia el este. Las opciones de transporte público varían por temporada; confirmá frecuencias.',
    tip: 'Reservá restaurantes en verano y respetá las áreas naturales de las lagunas.',
    season: 'Noviembre a marzo',
    rating: '4.8',
  },
  {
    slug: 'grutas-de-punta-ballena',
    name: 'Las Grutas de Punta Ballena',
    region: 'Maldonado',
    image: punta.url,
    categories: ['Playas', 'Naturaleza', 'Aventura', 'Joyas ocultas'],
    description: 'Cuevas naturales y formaciones rocosas esculpidas por el mar en la base del acantilado de Punta Ballena. Un rincón costero distinto, ideal para explorar cuando baja la marea.',
    attractions: ['Cuevas naturales frente al mar', 'Acantilados de Punta Ballena', 'Miradores sobre la bahía de Portezuelo'],
    activities: ['Explorar las grutas con marea baja', 'Fotografía costera', 'Combinar con el atardecer en Punta Ballena'],
    transport: 'Sobre la ruta Interbalnearia a la altura del km 115 (acceso a Punta Ballena). Se llega en ómnibus departamentales desde Maldonado/Punta del Este o en auto.',
    tip: 'Visitá las grutas únicamente con marea baja y oleaje calmo, usando calzado antideslizante para las rocas.',
    season: 'Primavera y verano',
    rating: '4.8',
  },
  {
    slug: 'arboretum-lussich',
    name: 'Arboretum Lussich',
    region:
