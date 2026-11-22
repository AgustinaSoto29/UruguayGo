import { createFileRoute, useNavigate } from '@tanstack/react-router';
import { Search, SlidersHorizontal } from 'lucide-react';
import { useState } from 'react';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { DestinationCard } from '@/components/destination-card';
import { categories, filterDestinations, pageHead } from '@/lib/destinations';

export const Route = createFileRoute('/destinos/')({
  validateSearch: z.object({
    q: z.string().optional(),
    categoria: z.string().optional(),
  }),
  head: () =>
    pageHead(
      'Destinos para descubrir',
      'Explorá playas, historia, naturaleza y gastronomía entre veintitrés destinos de Uruguay.',
    ),
  component: Explore,
});

function Explore() {
  const { q = '', categoria = '' } = Route.useSearch();
  const [query, setQuery] = useState(q);
  const navigate = useNavigate();
  const results = filterDestinations(q, categoria);

  return (
    <main>
      <section className="page-top">
        <div className="container">
          <div className="section-label">Tu próximo lugar favorito</div>
          <h1 className="page-title">Descubrí Uruguay a tu manera</h1>
          <p className="section-subtitle">
            De la costa al campo, de lo conocido a lo inesperado. Encontrá tu próximo destino.
          </p>
          <form
            className="search-form explore-search"
            onSubmit={(e) => {
              e.preventDefault();
              navigate({ to: '/destinos', search: { q: query, categoria } });
            }}
          >
            <Search />
            <input
              aria-label="Buscar un destino"
              placeholder="Nombre, departamento o lugar…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <Button type="submit">Buscar</Button>
          </form>
        </div>
      </section>

      <section className="container section">
        <div className="explore-tools">
          <div className="filter-tabs" aria-label="Filtrar por interés">
            {['Todos', ...categories].map((c) => (
              <Button
                key={c}
                variant={(c === 'Todos' ? !categoria : categoria === c) ? 'default' : 'outline'}
                size="sm"
                aria-pressed={c === 'Todos' ? !categoria : categoria === c}
                onClick={() =>
                  navigate({
                    to: '/destinos',
                    search: { q, categoria: c === 'Todos' ? undefined : c },
                  })
                }
              >
                {c}
              </Button>
            ))}
          </div>
          <span className="text-link">
            <SlidersHorizontal size={15} />A tu ritmo
          </span>
        </div>

        <p className="result-count">
          {results.length} destinos
          {categoria ? ` · ${categoria}` : ''}
          {q ? ` · “${q}”` : ''}
        </p>

        {results.length ? (
          <div className="destination-grid">
            {results.map((d) => (
              <DestinationCard key={d.slug} destination={d} />
            ))}
          </div>
        ) : (
          <div className="empty">
            <Search size={35} className="mx-auto mb-4" />
            <h2>No encontramos ese rincón</h2>
            <p>Probá con otro nombre o elegí otra categoría.</p>
            <Button
              variant="outline"
              className="mt-5"
              onClick={() => {
                setQuery('');
                navigate({ to: '/destinos', search: {} });
              }}
            >
              Ver todos los destinos
            </Button>
          </div>
        )}

        <p className="chat-disclaimer mt-8">
          Información orientativa: confirmá accesos, horarios y servicios antes de viajar.
        </p>
      </section>
    </main>
  );
}
