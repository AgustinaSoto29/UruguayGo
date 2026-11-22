import { createFileRoute, Link, notFound } from '@tanstack/react-router';
import { ArrowLeft, ArrowRight, Bus, CalendarDays, Check, Compass, Lightbulb, MapPin } from 'lucide-react';
import { destinations, pageHead } from '@/lib/destinations';
import { DestinationCard } from '@/components/destination-card';
import { LocalFieldNotes } from '@/components/local-field-notes';
import { Button } from '@/components/ui/button';

export const Route = createFileRoute('/destinos/$slug')({
  loader: ({ params }) => {
    const destination = destinations.find((d) => d.slug === params.slug);
    if (!destination) throw notFound();
    return destination;
  },
  head: ({ loaderData: d }) =>
    d
      ? pageHead(d.name, d.description, d.image)
      : pageHead('Destino no disponible', 'Descubrí otros destinos en UruguayGo.'),
  component: Detail,
});

function Detail() {
  const d = Route.useLoaderData();

  return (
    <main>
      <section className="hero detail-hero">
        <img src={d.image} alt={d.name} />
        <div className="container hero-inner">
          <Link className="breadcrumbs" to="/destinos" search={{}}>
            <ArrowLeft size={15} />
            Todos los destinos
          </Link>
          <div className="eyebrow">
            <MapPin size={15} />
            {d.region}, Uruguay
          </div>
          <h1>{d.name}</h1>
          <div className="flex flex-wrap gap-3 text-sm">
            {d.categories.map((c) => (
              <Link key={c} to="/destinos" search={{ categoria: c }}>
                {c}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="container section detail-layout">
        <article>
          <div className="section-label">Un lugar para dejarse llevar</div>
          <h2>Conocé {d.name}</h2>
          <p>{d.description}</p>

          <h3>Lo que no te podés perder</h3>
          <ul className="detail-list">
            {d.attractions.map((a) => (
              <li key={a}>
                <MapPin />
                {a}
              </li>
            ))}
          </ul>

          <h3>Planes para disfrutar</h3>
          <ul className="detail-list">
            {d.activities.map((a) => (
              <li key={a}>
                <Check />
                {a}
              </li>
            ))}
          </ul>

          <div className="tip-box">
            <h4 className="flex items-center gap-2 font-bold text-sm">
              <Lightbulb size={17} />
              Un consejo antes de salir
            </h4>
            <p>{d.tip}</p>
          </div>

          <LocalFieldNotes destination={d} />
        </article>

        <aside className="travel-info">
          <h3>Tu viaje, un poco más cerca</h3>
          <div className="info-item">
            <h4>
              <MapPin />
              Ubicación
            </h4>
            <p>
              {d.name}, departamento de {d.region}, Uruguay.
            </p>
          </div>
          <div className="info-item">
            <h4>
              <Bus />
              Cómo llegar
            </h4>
            <p>{d.transport}</p>
          </div>
          <div className="info-item">
            <h4>
              <CalendarDays />
              Cuándo ir
            </h4>
            <p>{d.season}</p>
          </div>
          <Button asChild variant="outline">
            <Link to="/asistente">
              <Compass />
              Preguntale al asistente
            </Link>
          </Button>
          <p className="chat-disclaimer mt-5">
            Información orientativa e imagen ilustrativa. Confirmá horarios, accesos y servicios antes de salir.
          </p>
        </aside>
      </div>

      <section className="stories-band">
        <div className="container section">
          <div className="section-heading">
            <div>
              <div className="section-label">Seguí explorando</div>
              <h2>Más lugares, más historias</h2>
            </div>
            <Link className="text-link" to="/destinos" search={{}}>
              Ver todos
              <ArrowRight />
            </Link>
          </div>
          <div className="destination-grid">
            {destinations
              .filter((x) => x.slug !== d.slug)
              .slice(0, 4)
              .map((x) => (
                <DestinationCard key={x.slug} destination={x} />
              ))}
          </div>
        </div>
      </section>
    </main>
  );
}
