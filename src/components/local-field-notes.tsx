import { Clock, CloudRain, Compass, MapPin } from 'lucide-react';
import type { Destination } from '@/lib/destinations';

export function LocalFieldNotes({ destination }: { destination: Destination }) {
  const { bestWindow, roadAndAccess, localTipPractical, planB } = destination;

  if (!bestWindow && !roadAndAccess && !localTipPractical && !planB) {
    return null;
  }

  return (
    <section aria-label="Cómo se vive el lugar y plan B" className="mt-8">
      <div className="section-label">Mirada local</div>
      <h3>Cómo se vive el lugar y Plan B</h3>

      <div className="grid gap-3 sm:grid-cols-2 mt-4">
        {bestWindow && (
          <div className="tip-box">
            <h4 className="flex items-center gap-2 font-bold text-sm">
              <Clock size={16} />
              Ventana ideal
            </h4>
            <p>{bestWindow}</p>
          </div>
        )}

        {roadAndAccess && (
          <div className="tip-box">
            <h4 className="flex items-center gap-2 font-bold text-sm">
              <MapPin size={16} />
              Camino y acceso
            </h4>
            <p>{roadAndAccess}</p>
          </div>
        )}

        {localTipPractical && (
          <div className="tip-box">
            <h4 className="flex items-center gap-2 font-bold text-sm">
              <Compass size={16} />
              Dato práctico de local
            </h4>
            <p>{localTipPractical}</p>
          </div>
        )}

        {planB && (
          <div className="tip-box">
            <h4 className="flex items-center gap-2 font-bold text-sm">
              <CloudRain size={16} />
              Plan B si cambia el día
            </h4>
            <p>{planB}</p>
          </div>
        )}
      </div>
    </section>
  );
}
