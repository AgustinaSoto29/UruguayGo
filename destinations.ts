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
  image?: string;
  categories: Category[];
  description: string;
  attractions: string[];
  activities: string[];
  transport: string;
  tip: string;
  season: string;
  hidden?: boolean;
  sources?: { label: string; url: string }[];
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
    hidden: true,
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
    hidden: true,
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
    hidden: true,
    sources: [
      { label: 'Intendencia de Maldonado: Punta Ballena y su entorno', url: 'https://www.maldonado.gub.uy/' },
    ],
  },
  {
    slug: 'arboretum-lussich',
    name: 'Arboretum Lussich',
    region: 'Maldonado',
    image: piriapolis.url,
    categories: ['Naturaleza', 'Cultura', 'Aventura', 'Joyas ocultas'],
    description: 'Una reserva forestal de casi 200 hectáreas creada por Antonio Lussich en la Sierra de la Ballena, con cientos de especies de árboles de todo el mundo, senderos y miradores panorámicos.',
    attractions: ['Senderos interpretativos del bosque', 'Mirador de la Sierra de la Ballena', 'Museo del Azulejo y Casona Lussich'],
    activities: ['Caminar entre especies exóticas y nativas', 'Avistamiento de aves', 'Recorrer la casona histórica'],
    transport: 'A minutos de Punta Ballena por Camino Lussich, cerca de la ruta Interbalnearia. Accesible en auto o transporte local desde Maldonado y Piriápolis.',
    tip: 'Llevá agua, protector solar y calzado cómodo para recorrer los senderos con pendiente.',
    season: 'Todo el año',
    hidden: true,
    sources: [
      { label: 'Intendencia de Maldonado: Arboretum Lussich', url: 'https://www.maldonado.gub.uy/' },
    ],
  },
  {
    slug: 'grutas-del-palacio',
    name: 'Grutas del Palacio',
    region: 'Flores',
    categories: ['Naturaleza', 'Aventura', 'Joyas ocultas'],
    description: 'Cavernas de areniscas sostenidas por columnas, en el primer Geoparque Mundial UNESCO de Uruguay. Un viaje de millones de años de historia geológica en pleno campo de Flores.',
    attractions: ['Grutas del Palacio, monumento natural en Marincho', 'Los 14 geositios del Geoparque', 'Ecoparque Rodolfo Tálice'],
    activities: ['Recorrer los geositios con guía', 'Visitar en familia o con escuelas con la guía de turismo educativo', 'Acampar en las zonas habilitadas'],
    transport: 'Las Grutas están en la localidad de Marincho, departamento de Flores (la capital departamental es Trinidad). Los geositios están repartidos por el departamento, así que conviene llegar en auto o coordinar un traslado con la Intendencia de Flores.',
    tip: 'La mayoría de los geositios están en predios privados: coordiná la visita con la Intendencia de Flores y confirmá qué sitios están abiertos.',
    season: 'Todo el año (confirmá aperturas)',
    hidden: true,
    sources: [
      { label: 'Ministerio de Turismo: Flores, turismo educativo y de naturaleza', url: 'https://www.gub.uy/ministerio-turismo/comunicacion/noticias/flores-apuesta-turismo-educativo-naturaleza' },
      { label: 'Ministerio de Educación y Cultura: sitios UNESCO', url: 'https://www.gub.uy/ministerio-educacion-cultura/politicas-y-gestion/sitios' },
    ],
  },
  {
    slug: 'manantiales-serranos',
    name: 'Manantiales Serranos y Villa Serrana',
    region: 'Lavalleja',
    categories: ['Naturaleza', 'Aventura', 'Joyas ocultas'],
    description: 'Serranías milenarias y agua por todos lados. Desde abril de 2026 es Geoparque Mundial UNESCO: más de 2.000 km² alrededor de Minas, Villa Serrana y Solís de Mataojo.',
    attractions: ['Parque Salto del Penitente', 'Cerro Arequita', 'Nacientes del río Santa Lucía', 'Villa Serrana'],
    activities: ['Caminar por las sierras', 'Visitar saltos y miradores', 'Subir al Cerro Arequita', 'Pasear por Villa Serrana'],
    transport: 'Minas, capital de Lavalleja, es la puerta de entrada. Al Parque Salto del Penitente se ingresa desde la ruta 8, por los km 125 o 135 según una guía oficial. A Villa Serrana y a los geositios conviene llegar en auto o con traslado local; confirmá las opciones antes de viajar.',
    tip: 'Varios sitios son de gestión particular: confirmá horarios y tarifas antes de ir, y llevá calzado cómodo y agua.',
    season: 'Primavera y otoño',
    hidden: true,
    sources: [
      { label: 'Ministerio de Educación y Cultura: declaratoria del Geoparque', url: 'https://www.gub.uy/ministerio-educacion-cultura/comunicacion/noticias/manantiales-serranos-es-declarado-geoparque-mundial-unesco' },
      { label: 'la diaria: el nuevo geoparque mundial', url: 'https://ladiaria.com.uy/ambiente/articulo/2026/4/manantiales-serranos-el-nuevo-geoparque-mundial-que-cuenta-la-historia-de-la-tierra-de-nuestras-comunidades-y-del-agua/' },
    ],
  },
  {
    slug: 'fray-bentos',
    name: 'Fray Bentos y el Anglo',
    region: 'Río Negro',
    categories: ['Historia', 'Cultura', 'Joyas ocultas'],
    description: 'Un antiguo frigorífico a orillas del río Uruguay convertido en Patrimonio Mundial UNESCO en 2015. El Paisaje Industrial Fray Bentos abarca 275 hectáreas y fue el primer enclave de la revolución industrial en el Río de la Plata.',
    attractions: ['Museo de la Revolución Industrial, en el ex Frigorífico Anglo', 'Centro de Visitantes del Patrimonio Mundial', 'Chimenea de 1906 y muelles sobre el río Uruguay'],
    activities: ['Hacer una visita guiada al ex frigorífico', 'Recorrer el casco histórico de Fray Bentos', 'Caminar junto al río Uruguay'],
    transport: 'Fray Bentos es la capital de Río Negro, sobre el río Uruguay, y el Anglo queda al oeste de la ciudad. Hay ómnibus interdepartamentales desde Montevideo; confirmá empresas y frecuencias antes de viajar.',
    tip: 'Combinalo con los Esteros de Farrapos y el resto del Corredor de los Pájaros Pintados para armar una escapada por el litoral.',
    season: 'Todo el año',
    hidden: true,
    sources: [
      { label: 'UNESCO: Paisaje cultural industrial de Fray Bentos', url: 'https://whc.unesco.org/ES/list/1464' },
      { label: 'Ministerio de Turismo: Centro de Visitantes del Anglo', url: 'https://www.gub.uy/ministerio-turismo/comunicacion/noticias/ministerio-turismo-bid-intendencia-suman-valor-barrio-anglo' },
    ],
  },
  {
    slug: 'esteros-de-farrapos',
    name: 'Esteros de Farrapos',
    region: 'Río Negro',
    categories: ['Naturaleza', 'Aventura', 'Joyas ocultas'],
    description: 'Islas, islotes y bañados sobre el río Uruguay: el humedal fluvial más extenso del país, Parque Nacional y sitio Ramsar desde 2004. Un rincón para mirar con calma.',
    attractions: ['Galpón de Piedra, Centro de Visitantes en San Javier', 'Islas del río Uruguay', 'Esteros y bosques de ribera'],
    activities: ['Observar aves y fauna', 'Fotografiar naturaleza', 'Recorrer el río con prestadores habilitados'],
    transport: 'El Centro de Visitantes está en el Galpón de Piedra, en San Javier (Río Negro), una de las puertas de entrada al parque. Para recorrer las islas hay que coordinar la salida; conviene ir en auto y confirmar con el centro de visitantes.',
    tip: 'Es un área protegida: llevate tus residuos y respetá la fauna. Con las crecidas del río algunas zonas se inundan, así que consultá el estado antes de ir.',
    season: 'Todo el año (consultá el estado del río)',
    hidden: true,
    sources: [
      { label: 'Ministerio de Ambiente: Parque Nacional Esteros de Farrapos', url: 'https://www.gub.uy/ministerio-ambiente/politicas-y-gestion/parque-nacional-esteros-farrapos-islas-del-rio-uruguay-rio-negro' },
      { label: 'Convención Ramsar: ficha del sitio', url: 'https://www.ramsar.org/sites/default/files/documents/library/site_summary_2_esteros_es.pdf' },
    ],
  },
  {
    slug: 'iglesia-de-atlantida',
    name: 'Iglesia de Atlántida',
    region: 'Canelones',
    categories: ['Cultura', 'Historia', 'Joyas ocultas'],
    description: 'Una iglesia de ladrillo obra del ingeniero Eladio Dieste, reconocida como Patrimonio Mundial por la UNESCO. Arquitectura que sorprende en el balneario de Atlántida.',
    attractions: ['Iglesia de Cristo Obrero, de Eladio Dieste', 'Rambla y playas de Atlántida'],
    activities: ['Visitar la iglesia (confirmá horarios de apertura)', 'Pasear por la rambla', 'Combinar arquitectura y playa en el día'],
    transport: 'Atlántida es un balneario de Canelones sobre la costa. Hay ómnibus desde Montevideo y también se llega en auto por la Interbalnearia; confirmá frecuencias antes de viajar.',
    tip: 'Es un templo en uso: respetá los horarios de culto y las indicaciones del lugar.',
    season: 'Todo el año',
    hidden: true,
    sources: [
      { label: 'Ministerio de Educación y Cultura: sitios UNESCO en Uruguay', url: 'https://www.gub.uy/ministerio-educacion-cultura/comunicacion/noticias/encuentro-rutas-unesco-fray-bentos-fortalece-promocion-gestion-destinos' },
    ],
  },
  {
    slug: 'san-gregorio-de-polanco',
    name: 'San Gregorio de Polanco',
    region: 'Tacuarembó',
    categories: ['Cultura', 'Playas', 'Joyas ocultas'],
    description: 'El primer Museo Abierto de Artes Visuales de América Latina, sobre una península de arena blanca en el embalse de Rincón del Bonete. Arte mural al aire libre y playas de río tranquilas.',
    attractions: ['Murales y esculturas al aire libre por todo el pueblo', 'Playas sobre el Río Negro', 'Muelle y paseos costeros'],
    activities: ['Hacer un recorrido a pie por los murales', 'Disfrutar de la playa de río', 'Pesca deportiva y paseos náuticos'],
    transport: 'Se accede por la ruta 43 desde la ruta 5 (a la altura de Paso de los Toros o Tacuarembó). Hay servicios de ómnibus desde Montevideo y Tacuarembó.',
    tip: 'Pedí el mapa de murales en el centro de información turística local para no perderte las obras escondidas en las calles internas.',
    season: 'Primavera y verano',
    hidden: true,
    sources: [
      { label: 'Ministerio de Turismo: San Gregorio de Polanco', url: 'https://turismo.gub.uy/' },
    ],
  },
  {
    slug: 'santa-teresa-laguna-negra',
    name: 'Parque Nacional Santa Teresa y Laguna Negra',
    region: 'Rocha',
    image: diablo.url,
    categories: ['Naturaleza', 'Historia', 'Playas', 'Joyas ocultas'],
    description: 'Más de 3.000 hectáreas de bosque costero, invernáculos históricos, playas oceánicas vírgenes y una fortaleza colonial de piedra del siglo XVIII entre el Atlántico y la Laguna Negra.',
    attractions: ['Fortaleza de Santa Teresa', 'Playa La Moza y Playa del Barco', 'Invernáculo y Sombráculo', 'Laguna Negra'],
    activities: ['Recorrer la fortaleza histórica', 'Acampar o pasar el día en el parque', 'Caminar por senderos hacia la Laguna Negra'],
    transport: 'Sobre la ruta 9 en el km 302, entre Punta del Diablo y La Coronilla. Todos los ómnibus hacia el Chuy tienen parada en el acceso al parque.',
    tip: 'El parque es enorme: si vas sin auto, organizá bien los tramos a pie entre la fortaleza, las playas y el área de servicios.',
    season: 'Todo el año',
    hidden: true,
    sources: [
      { label: 'Ministerio de Turismo: Fortaleza y Parque Nacional Santa Teresa', url: 'https://turismo.gub.uy/' },
    ],
  },
  {
    slug: 'sierra-de-las-animas',
    name: 'Sierra de las Ánimas y Pozos Azules',
    region: 'Maldonado',
    image: piriapolis.url,
    categories: ['Naturaleza', 'Aventura', 'Joyas ocultas'],
    description: 'Uno de los puntos más altos de Uruguay, con senderos serranos, bosque nativo y piscinas naturales de agua cristalina conocidas como los Pozos Azules.',
    attractions: ['Cima del Cerro Ánimas (501 m)', 'Pozos Azules', 'Cañadón de los Espejos'],
    activities: ['Trekking de dificultad media-alta', 'Baño en pozos naturales en verano', 'Observación panorámica desde la cumbre'],
    transport: 'Acceso sobre ruta Interbalnearia a la altura del km 86 (cerca de Solís y Pan de Azúcar). Conviene llegar en auto o coordinar traslado hasta el puesto de ingreso.',
    tip: 'El ingreso es controlado y con horario estricto de subida para garantizar el regreso con luz natural; llevá abundante agua y calzado de trekking.',
    season: 'Primavera y otoño (o verano muy temprano)',
    hidden: true,
    sources: [
      { label: 'Ministerio de Turismo: Sierra de las Ánimas', url: 'https://turismo.gub.uy/' },
    ],
  },
  {
    slug: 'barra-de-valizas',
    name: 'Barra de Valizas y Monte de Ombúes',
    region: 'Rocha',
    image: cabo.url,
    categories: ['Playas', 'Naturaleza', 'Aventura', 'Joyas ocultas'],
    description: 'Un pueblo bohemio donde un arroyo serpenteante desemboca en el océano junto a dunas gigantes y el mayor bosque nativo de ombúes de la región.',
    attractions: ['Arroyo Valizas', 'Monte de Ombúes (sobre Laguna de Castillos)', 'Dunas hacia Cabo Polonio'],
    activities: ['Cruzar el arroyo en bote y caminar las dunas', 'Navegar en lancha hasta el Monte de Ombúes', 'Disfrutar de la gastronomía artesanal'],
    transport: 'Por ruta 10 (km 271), entre Aguas Dulces y Cabo Polonio. Llegan ómnibus directos desde Montevideo en temporada y desde Castillos todo el año.',
    tip: 'Para visitar el Monte de Ombúes, tomá las lanchas que salen desde el puente del arroyo Valizas por la ruta 10.',
    season: 'Noviembre a marzo',
    hidden: true,
    sources: [
      { label: 'SNAP / Ministerio de Ambiente: Laguna de Castillos y Monte de Ombúes', url: 'https://www.gub.uy/ministerio-ambiente/' },
    ],
  },
  {
    slug: 'cerro-arequita-islas-ombues',
    name: 'Cerro Arequita e Isla de Ombúes',
    region: 'Lavalleja',
    categories: ['Naturaleza', 'Aventura', 'Joyas ocultas'],
    description: 'Un macizo rocoso de origen volcánico rodeado por un bosque singular de ombúes centenarios, grutas naturales y las aguas tranquilas del río Santa Lucía.',
    attractions: ['Cerro Arequita y Gruta de Colón', 'Isla de Ombúes', 'Camping y costa del río Santa Lucía'],
    activities: ['Subir a la cima del cerro', 'Recorrer la gruta y el bosque de ombúes', 'Canoaje en el río Santa Lucía'],
    transport: 'A unos 10 km al norte de la ciudad de Minas por ruta 40. Se accede fácilmente en auto o taxi/remís desde Minas.',
    tip: 'Llevá linterna si vas a explorar las zonas rocosas y consultá los horarios de acceso al predio del cerro.',
    season: 'Todo el año',
    hidden: true,
    sources: [
      { label: 'Intendencia de Lavalleja: Cerro Arequita', url: 'https://www.lavalleja.gub.uy/' },
    ],
  },
  {
    slug: 'rincon-de-franquia',
    name: 'Rincón de Franquía',
    region: 'Artigas',
    categories: ['Naturaleza', 'Aventura', 'Joyas ocultas'],
    description: 'En el extremo noroeste donde se unen los ríos Uruguay y Cuareim, esta área protegida resguarda selvas en galería y más de 200 especies de aves.',
    attractions: ['Triple frontera fluvial (Uruguay, Argentina y Brasil)', 'Senderos de monte ribereño', 'Miradores de aves'],
    activities: ['Avistamiento de aves y fotografía', 'Senderismo interpretativo', 'Conocer Bella Unión y la triple frontera'],
    transport: 'En las afueras de Bella Unión (Artigas), accesible por ruta 3 hasta el extremo norte del país.',
    tip: 'Llevá binoculares, repelente y cámara; las primeras horas de la mañana son las mejores para observar fauna.',
    season: 'Otoño y primavera',
    hidden: true,
    sources: [
      { label: 'SNAP / Ministerio de Ambiente: Área Protegida Rincón de Franquía', url: 'https://www.gub.uy/ministerio-ambiente/' },
    ],
  },
];

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