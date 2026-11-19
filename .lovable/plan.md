# Mejoras de contenido y funcionamiento de UruguayGo

Se conserva la estructura (Inicio, Destinos, Ficha, Experiencias, Asistente) y el diseño actual. Solo cambia el contenido y la lógica.

## Diagnóstico de lo que hay hoy

**Asistente**
- Reconoce solo palabras clave fijas; cualquier pregunta formulada distinto cae en una respuesta genérica.
- Por categoría devuelve siempre los mismos 3 primeros destinos de la lista (de ahí la sensación de repetición).
- No combina intereses ("playa tranquila y poco turística", "con niños", "sin auto").
- Recuerda el destino anterior solo si se escribió con el nombre exacto ("Colonia" a secas no lo retiene).
- Responde transporte con un único párrafo y sin fuentes.

**Destinos**
- 12 lugares, casi todos los clásicos. Faltan rincones poco conocidos, Las Grutas y Punta Ballena como ficha propia.
- Las puntuaciones con estrellas (4.7 a 4.9) son inventadas: no provienen de ninguna fuente verificable.
- No hay forma de distinguir un dato confirmado de una recomendación, ni enlaces a fuentes.

**Transporte**
- Un solo texto por destino, sin alternativas (ómnibus, auto, viaje compartido, ferry, traslado local) ni consejos separados.
- No existe una guía general de cómo moverse por Uruguay (Viatik, terminales, empresas, etc.).

## Propuesta

### 1. Destinos ampliados y "Joyas ocultas de Uruguay"
- Mantener los 12 actuales y sumar unos 16 a 20 lugares verificados, con Las Grutas y Punta Ballena destacados. Candidatos (se confirmará cada uno con fuentes oficiales antes de incluirlo): Laguna Garzón y Pueblo Garzón, Barra de Valizas, Aguas Dulces, Parque Nacional Santa Teresa, Laguna de Rocha, Villa Serrana y Salto del Penitente, Cerro Arequita, Grutas del Palacio (Geoparque UNESCO, Flores), Valle Edén, San Gregorio de Polanco, Esteros de Farrapos, Fray Bentos (Paisaje Industrial, Patrimonio Mundial), Conchillas, Nueva Helvecia, Laguna Negra / San Miguel, Pueblo Edén.
- Nueva categoría "Joyas ocultas de Uruguay" en los filtros del explorador, en los accesos rápidos del inicio y en el asistente. En el inicio, una franja breve para descubrirlas (mismas tarjetas, mismo estilo).
- Reemplazar las estrellas inventadas por una etiqueta real (categoría o "Joya oculta").
- Fotos nuevas para los destinos agregados, con el mismo estilo y la aclaración de "imagen ilustrativa" que ya existe.

### 2. Transporte completo
- En cada ficha, la sección "Cómo llegar" pasa a mostrar:
  - **Datos confirmados**: terminal o punto de partida, rutas, empresas de ómnibus que llegan, accesos especiales (por ejemplo, los vehículos autorizados de Cabo Polonio).
  - **Alternativas**: ómnibus interdepartamental, auto, viaje compartido, ferry o traslado local, según corresponda.
  - **Consejos prácticos** (marcados como recomendación).
  - **Fuentes**: enlaces a sitios oficiales (Ministerio de Turismo, intendencias, áreas protegidas, terminal Tres Cruces, empresas de transporte).
- Nueva sección "Cómo moverse por Uruguay" dentro de la página de destinos (sin agregar páginas nuevas al menú): compra de pasajes con Viatik y en terminales, principales empresas interdepartamentales, ómnibus urbanos de Montevideo, ferris desde Buenos Aires, autos de alquiler, viajes compartidos y aplicaciones de traslado, con su alcance y límites.
- Todo dato de horarios, precios o frecuencias se presenta como "a confirmar" con enlace, nunca como valor fijo.

### 3. Asistente especializado
- Depende de la respuesta pendiente:
  - **Con inteligencia artificial (recomendado)**: se activa Lovable Cloud y el asistente responde con IA, pero limitado al catálogo verificado y a la guía de transporte de la app. Debe recomendar variado (rotando entre conocidos y joyas ocultas), adaptar a los intereses, citar las fuentes del catálogo y decir claramente "no tengo ese dato" cuando algo no está en la información verificada.
  - **Sin conexión, mejorado**: reconocimiento de intereses combinados, sinónimos y nombres cortos, rotación de sugerencias para no repetir, respuestas de transporte con alternativas y fuentes, y el mismo criterio de admitir lo que no sabe.
- En ambos casos, las respuestas enlazan a la ficha del destino.

### 4. Lo que se conserva sin cambios
- Diseño, navegación, experiencias publicadas, buscador, recuperación automática ante archivos viejos.

## Detalles técnicos
- `Destination` suma: `hidden: boolean`, `transport: { confirmed: string[]; options: {mode; detail}[]; tips: string[] }`, `sources: {label; url}[]`; se elimina `rating`. Nueva categoría `Joyas ocultas` en `categories`.
- Nuevo módulo de guía de transporte general compartido por la página de destinos y el asistente.
- Investigación previa de cada destino y medio de transporte con búsqueda web; solo se incluye lo que tenga fuente oficial o reconocida.
- Opción IA: función de servidor con el AI Gateway, con el catálogo como contexto y respuesta en streaming; la opción sin conexión reemplaza la lógica de `travel-assistant.ts`.
- Pruebas: nueva categoría filtra solo joyas ocultas; Las Grutas y Punta Ballena presentes; todo destino tiene al menos una fuente y alternativas de transporte; el asistente no repite las mismas sugerencias en consultas seguidas y admite cuando no sabe.
