import { createFileRoute, Link, useNavigate } from '@tanstack/react-router';
import { useState, type ComponentType } from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  Compass,
  Landmark,
  Mountain,
  Palette,
  Search,
  Sparkles,
  Trees,
  Umbrella,
  Utensils,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { DestinationCard } from '@/components/destination-card';
import { StoryCard } from '@/components/story-card';
import { categories, destinations, heroImage, pageHead, type Category } from '@/lib/destinations';
import { initialExperiences } from '@/lib/experiences';

const categoryIcons: Record<string, ComponentType<{ size?: number; className?: string }>> = {
  Playas: Umbrella,
  Naturaleza: Trees,
  Aventura: Mountain,
  Cultura: Palette,
  Historia: Landmark,
  Gastronomía: Utensils,
  Gastronomia: Utensils,
  'Joyas ocultas': Sparkles,
};

export const Route = createFileRoute('/')({
  head: () =>
    pageHead(
      'UruguayGo — Descubrí tu próximo destino',
      'Playas, naturaleza, cultura y experiencias para descubrir Uruguay a tu manera.',
      heroImage,
    ),
  component: Home,
});

function Home() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  return (
    <main>
      <section className="hero">
        <img src={heroImage} alt="Faro junto al océano Atlántico y las dunas de la costa uruguaya" />
        <div className="container hero-inner">
          <div className="eyebrow">
            <Compass size={15} />
            Pequeño país, grandes descubrimientos
          </div>
          <h1>
            UruguayGo<span>.</span>
            <br />
            Tu próxima aventura
            <br />
            empieza acá.
          </h1>
          <p className="hero-description">
            Playas que enamoran, rincones que sorprenden
            <br className="hidden sm:block" /> y experiencias que se quedan con vos.
          </p>
          <form
            className="search-form"
            onSubmit={(e) => {
              e.preventDefault();
              const q = query.trim();
              navigate({ to: '/destinos', search: q ? { q } : {} });
            }}
          >
            <Search />
            <input
              aria-label="Buscar destinos"
              placeholder="¿Qué lugar de Uruguay querés descubrir?"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <Button type="submit">
              Explorar <ArrowRight />
            </Button>
          </form>
        </div>
      </section>

      <section className="category-strip" aria-label="Categorías turísticas">
        <div
          className="container category-row grid grid-cols-2 gap-3 sm:grid-cols-4 md:grid-cols-7 md:gap-2"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(7, minmax(0, 1fr))',
            alignItems: 'center',
            gap: '0.5rem',
          }}
        >
          {categories.map((category: Category) => {
            const Icon = categoryIcons[category] ?? Compass;
            return (
              <Link
                className="category-link flex flex-col items-center justify-center gap-1 whitespace-nowrap text-center text-xs sm:text-sm"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.25rem',
                  whiteSpace: 'nowrap',
                }}
                key={category}
                to="/destinos"
                search={{ categoria: category }}
              >
                <Icon size={18} />
                <span>{category}</span>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="section container">
        <div className="section-heading">
          <div>
            <div className="section-label">Dejá que el viaje te encuentre</div>
            <h2>Lugares que tenés que conocer</h2>
            <p className="section-subtitle">Destinos clásicos y nuevos descubrimientos en todo Uruguay.</p>
          </div>
          <Link className="text-link" to="/destinos" search={{}}>
            Ver todos los destinos <ArrowRight />
          </Link>
        </div>
        <div className="destination-grid">
          {destinations.slice(0, 8).map((d) => (
            <DestinationCard key={d.slug} destination={d} />
          ))}
        </div>
      </section>

      <section className="stories-band">
        <div className="section container">
          <div className="section-heading">
            <div>
              <div className="section-label">Historias que inspiran</div>
              <h2>Uruguay, en primera persona</h2>
              <p className="section-subtitle">Escapadas, hallazgos y consejos de quienes ya estuvieron ahí.</p>
            </div>
            <Link className="text-link" to="/experiencias">
              Todas las experiencias <ArrowRight />
            </Link>
          </div>
          <div className="story-grid">
            {initialExperiences.slice(0, 3).map((s) => (
              <StoryCard key={s.id} story={s} />
            ))}
          </div>
        </div>
      </section>

      <section className="container assistant-band">
        <div className="assistant-intro">
          <span className="assistant-icon">
            <Sparkles size={29} />
          </span>
          <div>
            <h2>¿A dónde te llevan las ganas?</h2>
            <p>Un poco de inspiración y consejos para tu próxima escapada.</p>
          </div>
        </div>
        <Link className="text-link" to="/asistente">
          Conversá con el asistente <ArrowUpRight />
        </Link>
      </section>
    </main>
  );
}
