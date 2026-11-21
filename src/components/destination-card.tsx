import { Link } from '@tanstack/react-router';
import { ArrowUpRight, Gem, MapPin } from 'lucide-react';
import { useState } from 'react';
import { heroImage, type Destination } from '@/lib/destinations';

export function DestinationCard({ destination: d }: { destination: Destination }) {
  const [src, setSrc] = useState<string>(d.image || heroImage);
  const [failed, setFailed] = useState(false);
  const isHiddenGem = d.categories.includes('Joyas ocultas');

  return (
    <Link to="/destinos/$slug" params={{ slug: d.slug }} className="destination-card">
      <div className="card-photo">
        {!failed ? (
          <img
            src={src}
            alt={d.name}
            loading="lazy"
            onError={() => {
              if (src !== heroImage) {
                setSrc(heroImage);
              } else {
                setFailed(true);
              }
            }}
          />
        ) : (
          <div className="card-photo-fallback" aria-hidden="true">
            <MapPin size={28} />
            <span>{d.region}</span>
          </div>
        )}
        <span className="tag">{d.categories[0]}</span>
      </div>
      <div className="card-body">
        <div className="card-location">
          <MapPin />
          {d.region}, Uruguay
        </div>
        <div className="card-title-row">
          <h3>{d.name}</h3>
          {isHiddenGem && (
            <span className="rating hidden-gem">
              <Gem />
              Joya oculta
            </span>
          )}
        </div>
        <p>{d.description}</p>
        <div className="card-bottom">
          <span>Descubrir destino</span>
          <ArrowUpRight />
        </div>
      </div>
    </Link>
  );
}
