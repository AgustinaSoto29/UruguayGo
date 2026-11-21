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

const baseDestinations: Destination[] = [
  {
    slug: 'cabo-polonio',
    name: 'Cabo Polonio',
    region: 'Rocha',
    image: cabo.url,
    categories: ['Playas', 'Naturaleza', 'Aventura'],
    description: 'Dunas inmensas, casitas frente al mar y noches estrelladas para desconectar.',
    attractions: ['Faro de Cabo Polonio', 'Reserva de lobos marinos', 'Playa Sur'],
    activities: ['Caminar entre dunas', 'Observar fauna a distancia', 'Disfrutar del cielo nocturno'],
    transport: 'Ómnibus por ruta 9 hasta la terminal sobre ruta 10 y traslado autorizado al parque.',
    tip: 'Llevá efectivo, linterna y agua; la conectividad es limitada.',
    season: 'Noviembre a marzo',
    rating: '4.9',
  },
  {
    slug: 'colonia-del-sacramento',
    name: 'Colonia del Sacramento',
    region: 'Colonia',
    image: colonia.url,
    categories: ['Cultura', 'Historia', 'Gastronomía'],
    description: 'Calles empedradas, Barrio Histórico Patrimonio Mundial y atardeceres sobre el río.',
    attractions: ['Barrio Histórico', 'Calle de los Suspiros', 'Faro'],
    activities: ['Recorrer museos', 'Pasear por el puerto', 'Probar gastronomía local'],
    transport: 'Ómnibus desde Tres Cruces por ruta 1 o ferry desde Buenos Aires.',
    tip: 'Usá calzado cómodo para los adoquines.',
    season: 'Todo el año',
    rating: '4.9',
  },
  {
    slug: 'punta-del-este',
    name: 'Punta del Este',
    region: 'Maldonado',
    image: punta.url,
    categories: ['Playas', 'Cultura', 'Gastronomía'],
    description: 'Playas para todos los ritmos, arte y una península con mucha vida.',
    attractions: ['Los Dedos', 'Puerto de Punta del Este', 'Casapueblo'],
    activities: ['Ir a Playa Mansa o Brava', 'Pasear por la península', 'Disfrutar del puerto'],
    transport: 'Ómnibus frecuentes por ruta Interbalnearia o vuelo a Laguna del Sauce.',
    tip: 'Respetá las banderas de playa y reservá con anticipación en verano.',
    season: 'Diciembre a marzo',
    rating: '4.8',
  },
  {
    slug: 'piriapolis',
    name: 'Piriápolis',
    region: 'Maldonado',
    image: piriapolis.url,
    categories: ['Playas', 'Aventura', 'Historia'],
    description: 'Mar y cerros en una misma escapada con rambla clásica y miradores.',
    attractions: ['Cerro San Antonio', 'Argentino Hotel', 'Cerro Pan de Azúcar'],
    activities: ['Caminar por la rambla', 'Subir a los miradores', 'Pasar la tarde en la playa'],
    transport: 'Ómnibus directos desde Montevideo por ruta Interbalnearia.',
    tip: 'Llevá agua y calzado cómodo para subir a los cerros.',
    season: 'Octubre a abril',
    rating: '4.7',
  },
  {
    slug: 'la-paloma',
    name: 'La Paloma',
    region: 'Rocha',
    image: paloma.url,
    categories: ['Playas', 'Aventura', 'Naturaleza'],
    description: 'Balneario rochense con faro emblemático, playas amplias y surf.',
    attractions: ['Faro del Cabo Santa María', 'Playa La Balconada', 'Bahía Chica'],
    activities: ['Tomar clases de surf', 'Ver el atardecer', 'Pasear en bicicleta'],
    transport: 'Ómnibus desde Montevideo y Rocha; en auto por rutas 9 y 15.',
    tip: 'Elegí playa según el viento y el oleaje.',
    season: 'Noviembre a marzo',
    rating: '4.8',
  },
  {
    slug: 'montevideo',
    name: 'Montevideo',
    region: 'Montevideo',
    image: montevideo.url,
    categories: ['Cultura', 'Historia', 'Gastronomía'],
    description: 'Rambla, cultura, cafés y barrios con identidad propia.',
    attractions: ['Ciudad Vieja y Teatro Solís', 'Rambla de Montevideo', 'Mercado del Puerto'],
    activities: ['Recorrer museos', 'Probar un chivito', 'Caminar por la rambla'],
    transport: 'Terminal Tres Cruces y red de ómnibus urbanos.',
    tip: 'Llevá abrigo liviano por el viento de la rambla.',
    season: 'Todo el año',
    rating: '4.7',
  },
  {
    slug: 'punta-del-diablo',
    name: 'Punta del Diablo',
    region: 'Rocha',
    image: diablo.url,
    categories: ['Playas', 'Gastronomía', 'Aventura'],
    description: 'Pueblo costero de pesca artesanal, playas y espíritu relajado.',
    attractions: ['Playa de los Pescadores', 'Playa del Rivero', 'Playa de la Viuda'],
    activities: ['Surfear', 'Probar pescado fresco', 'Caminar por la costa'],
    transport: 'Por ruta 9 y acceso al balneario; ómnibus desde Montevideo.',
    tip: 'Consultá horarios de ómnibus fuera de temporada alta.',
    season: 'Diciembre a marzo',
    rating: '4.8',
  },
  {
    slug: 'quebrada-de-los-cuervos',
    name: 'Quebrada de los Cuervos',
    region: 'Treinta y Tres',
    image: quebrada.url,
    categories: ['Naturaleza', 'Aventura', 'Joyas ocultas'],
    description: 'Barrancas, monte nativo y arroyo en un paisaje protegido del este.',
    attractions: ['Mirador de la quebrada', 'Monte nativo', 'Arroyo Yerbal Chico'],
    activities: ['Senderismo', 'Avistamiento de aves', 'Fotografía de naturaleza'],
    transport: 'Desde Treinta y Tres por ruta 8 y caminos rurales.',
    tip: 'Confirmá apertura y caminá solo por senderos habilitados.',
    season: 'Otoño y primavera',
    rating: '4.9',
  },
  {
    slug: 'valle-del-lunarejo',
    name: 'Valle del Lunarejo',
    region: 'Rivera',
    image: lunarejo.url,
    categories: ['Naturaleza', 'Aventura', 'Joyas ocultas'],
    description: 'Cerros de cima plana, quebradas y senderos en el norte del país.',
    attractions: ['Cerros y quebradas', 'Saltos de agua', 'Monte de quebrada'],
    activities: ['Caminatas con guías locales', 'Cabalgatas', 'Observación de aves'],
    transport: 'Acceso desde ruta 30 cerca de Tranqueras.',
    tip: 'Coordiná visitas con anticipación con guías o anfitriones locales.',
    season: 'Otoño y primavera',
    rating: '4.9',
  },
  {
    slug: 'carmelo',
    name: 'Carmelo',
    region: 'Colonia',
    image: carmelo.url,
    categories: ['Gastronomía', 'Cultura', 'Naturaleza'],
    description: 'Viñedos, caminos tranquilos y paseos junto al río.',
    attractions: ['Bodegas', 'Puente giratorio', 'Playa Seré'],
    activities: ['Visitar bodegas con reserva', 'Pasear en bicicleta', 'Degustar vinos'],
    transport: 'Por rutas 1 y 21 con ómnibus desde Montevideo.',
    tip: 'Reservá visitas a bodegas con antelación.',
    season: 'Todo el año',
    rating: '4.8',
  },
  {
    slug: 'termas-del-dayman',
    name: 'Termas del Daymán',
    region: 'Salto',
    image: termas.url,
    categories: ['Naturaleza'],
    description: 'Aguas termales y descanso en el litoral norte.',
    attractions: ['Complejos termales', 'Río Daymán', 'Ciudad de Salto'],
    activities: ['Disfrutar de piscinas termales', 'Pasear por Salto', 'Descansar al aire libre'],
    transport: 'Ómnibus a Salto por ruta 3 y traslado local a Daymán.',
    tip: 'Hidratate bien y alterná baños con descansos.',
    season: 'Todo el año',
    rating: '4.7',
  },
  {
    slug: 'jose-ignacio',
    name: 'José Ignacio',
    region: 'Maldonado',
    image: jose.url,
    categories: ['Playas', 'Gastronomía', 'Naturaleza'],
    description: 'Faro, playas abiertas y gastronomía costera.',
    attractions: ['Faro de José Ignacio', 'Playa Mansa', 'Playa Brava'],
    activities: ['Caminar por el pueblo', 'Disfrutar de la costa', 'Observar aves'],
    transport: 'Por ruta 10 al este de Punta del Este.',
    tip: 'Reservá con anticipación en verano.',
    season: 'Noviembre a marzo',
    rating: '4.8',
  },
];

const extraDestinations: Destination[] = [
  {
    slug: 'grutas-de-punta-ballena',
    name: 'Las Grutas de Punta Ballena',
    region: 'Maldonado',
    image: punta.url,
    categories: ['Playas', 'Naturaleza', 'Aventura', 'Joyas ocultas'],
    description: 'Cuevas naturales y rocas esculpidas por el mar en Punta Ballena.',
    attractions: ['Cuevas naturales', 'Acantilados de Punta Ballena', 'Bahía de Portezuelo'],
    activities: ['Explorar con marea baja', 'Fotografía costera', 'Ver el atardecer'],
    transport: 'Ruta Interbalnearia km 115, acceso a Punta Ballena.',
    tip: 'Visitá solo con marea baja y mar calmo.',
    season: 'Primavera y verano',
    rating: '4.8',
  },
  {
    slug: 'arboretum-lussich',
    name: 'Arboretum Lussich',
    region: 'Maldonado',
    image: piriapolis.url,
    categories: ['Naturaleza', 'Cultura', 'Aventura', 'Joyas ocultas'],
    description: 'Reserva forestal con senderos, miradores y variedad de árboles.',
    attractions: ['Senderos del bosque', 'Mirador Sierra de la Ballena', 'Casona Lussich'],
    activities: ['Caminar entre árboles', 'Avistamiento de aves', 'Recorrer senderos'],
    transport: 'Camino Lussich, cerca de Punta Ballena y ruta Interbalnearia.',
    tip: 'Llevá agua y calzado cómodo.',
    season: 'Todo el año',
    rating: '4.9',
  },
  {
    slug: 'grutas-del-palacio',
    name: 'Grutas del Palacio',
    region: 'Flores',
    image: quebrada.url,
    categories: ['Naturaleza', 'Aventura', 'Joyas ocultas'],
    description: 'Formaciones rocosas singulares en el Geoparque de Flores.',
    attractions: ['Grutas del Palacio', 'Geositios de Flores', 'Entorno rural'],
    activities: ['Recorrer con guía', 'Turismo educativo', 'Fotografía'],
    transport: 'Localidad de Marincho, departamento de Flores.',
    tip: 'Coordiná la visita y consultá horarios de apertura.',
    season: 'Todo el año',
    rating: '4.9',
  },
  {
    slug: 'manantiales-serranos-villa-serrana',
    name: 'Manantiales Serranos y Villa Serrana',
    region: 'Lavalleja',
    image: quebrada.url,
    categories: ['Naturaleza', 'Aventura', 'Joyas ocultas'],
    description: 'Sierras, arroyos y entornos naturales en Lavalleja.',
    attractions: ['Villa Serrana', 'Saltos y arroyos', 'Miradores serranos'],
    activities: ['Caminatas en las sierras', 'Descanso en la naturaleza', 'Fotografía'],
    transport: 'Desde Minas por ruta 8 y accesos locales.',
    tip: 'Consultá condiciones de acceso y llevá agua.',
    season: 'Primavera y otoño',
    rating: '4.8',
  },
  {
    slug: 'fray-bentos-y-el-anglo',
    name: 'Fray Bentos y el Anglo',
    region: 'Río Negro',
    image: carmelo.url,
    categories: ['Historia', 'Cultura', 'Joyas ocultas'],
    description: 'Patrimonio histórico industrial junto al río Uruguay.',
    attractions: ['Ex Frigorífico Anglo', 'Centro de Visitantes', 'Costa del río Uruguay'],
    activities: ['Visita guiada histórica', 'Paseo ribereño', 'Recorrido cultural'],
    transport: 'Ciudad de Fray Bentos sobre el río Uruguay.',
    tip: 'Consultá horarios de visitas guiadas.',
    season: 'Todo el año',
    rating: '4.8',
  },
  {
    slug: 'esteros-de-farrapos',
    name: 'Esteros de Farrapos',
    region: 'Río Negro',
    image: termas.url,
    categories: ['Naturaleza', 'Aventura', 'Joyas ocultas'],
    description: 'Humedal fluvial, islas y fauna sobre el río Uruguay.',
    attractions: ['San Javier', 'Islas del río Uruguay', 'Bañados y montes'],
    activities: ['Avistamiento de aves', 'Paseos náuticos habilitados', 'Naturaleza'],
    transport: 'Acceso desde San Javier, departamento de Río Negro.',
    tip: 'Respetá las normas del área protegida y llevate tus residuos.',
    season: 'Todo el año',
    rating: '4.8',
  },
  {
    slug: 'iglesia-de-atlantida',
    name: 'Iglesia de Atlántida',
    region: 'Canelones',
    image: montevideo.url,
    categories: ['Cultura', 'Historia', 'Joyas ocultas'],
    description: 'Obra arquitectónica de Eladio Dieste en Atlántida.',
    attractions: ['Iglesia de Cristo Obrero', 'Rambla de Atlántida', 'Playas'],
    activities: ['Visitar la iglesia', 'Caminar por Atlántida', 'Paseo arquitectónico'],
    transport: 'Ómnibus por ruta Interbalnearia o auto hasta Atlántida.',
    tip: 'Respetá los horarios de actividades del templo.',
    season: 'Todo el año',
    rating: '4.8',
  },
  {
    slug: 'san-gregorio-de-polanco',
    name: 'San Gregorio de Polanco',
    region: 'Tacuarembó',
    image: termas.url,
    categories: ['Cultura', 'Playas', 'Joyas ocultas'],
    description: 'Murales al aire libre y playas de río en el embalse del Río Negro.',
    attractions: ['Murales urbanos', 'Playas sobre el Río Negro', 'Península'],
    activities: ['Recorrer murales a pie', 'Descansar junto al río', 'Paseos tranquilos'],
    transport: 'Por ruta 43 desde ruta 5; ómnibus desde Montevideo y Tacuarembó.',
    tip: 'Recorré las calles internas a pie para ver los murales.',
    season: 'Primavera y verano',
    rating: '4.7',
  },
  {
    slug: 'santa-teresa-laguna-negra',
    name: 'Parque Nacional Santa Teresa y Laguna Negra',
    region: 'Rocha',
    image: diablo.url,
    categories: ['Naturaleza', 'Historia', 'Playas', 'Joyas ocultas'],
    description: 'Parque costero, fortaleza histórica, bosque y laguna en Rocha.',
    attractions: ['Fortaleza de Santa Teresa', 'Playas del parque', 'Laguna Negra'],
    activities: ['Visitar la fortaleza', 'Caminar por senderos', 'Disfrutar del bosque'],
    transport: 'Ruta 9 en Rocha, con acceso señalizado.',
    tip: 'Planificá traslados internos por las distancias dentro del parque.',
    season: 'Todo el año',
    rating: '4.9',
  },
  {
    slug: 'sierra-de-las-animas',
    name: 'Sierra de las Ánimas y Pozos Azules',
    region: 'Maldonado',
    image: piriapolis.url,
    categories: ['Naturaleza', 'Aventura', 'Joyas ocultas'],
    description: 'Cerros, senderos y pozos naturales en las sierras de Maldonado.',
    attractions: ['Cerro de las Ánimas', 'Pozos Azules', 'Miradores'],
    activities: ['Senderismo', 'Miradores', 'Paseos de naturaleza'],
    transport: 'Cerca de ruta Interbalnearia entre Solís y Pan de Azúcar.',
    tip: 'Salí temprano y llevá agua y calzado adecuado.',
    season: 'Primavera y otoño',
    rating: '4.8',
  },
  {
    slug: 'barra-de-valizas',
    name: 'Barra de Valizas y Monte de Ombúes',
    region: 'Rocha',
    image: cabo.url,
    categories: ['Playas', 'Naturaleza', 'Aventura', 'Joyas ocultas'],
    description: 'Dunas, arroyo Valizas y entorno costero en Rocha.',
    attractions: ['Arroyo Valizas', 'Dunas y playa', 'Entorno natural'],
    activities: ['Caminar por dunas', 'Pasear junto al arroyo', 'Descanso costero'],
    transport: 'Por ruta 10 en Rocha, entre Aguas Dulces y Cabo Polonio.',
    tip: 'Consultá paseos y cruces locales antes de salir.',
    season: 'Noviembre a marzo',
    rating: '4.8',
  },
];

export const destinations: Destination[] = [...baseDestinations, ...extraDestinations];

export const normalize = (value: string) =>
  value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();

export function filterDestinations(query: string, category: string) {
  return destinations.filter(
    (d) =>
      (!category || d.categories.some((c) => c === category)) &&
      normalize(`${d.name} ${d.region} ${d.description}`).includes(normalize(query)),
  );
}

export function pageHead(title: string, description: string, image?: string) {
  return {
    meta: [
      { title: `${title} | UruguayGo` },
      { name: 'description', content: description },
      { property: 'og:title', content: `${title} | UruguayGo` },
      { property: 'og:description', content: description },
      { property: 'og:type', content: 'website' },
      { name: 'twitter:card', content: 'summary_large_image' },
      ...(image
        ? [
            { property: 'og:image', content: image },
            { name: 'twitter:image', content: image },
          ]
        : []),
    ],
  };
}
