import { Link } from '@tanstack/react-router';
import { ArrowUpRight, MapPin, Star } from 'lucide-react';
import type { Destination } from '@/lib/destinations';
export function DestinationCard({destination:d}:{destination:Destination}){return <Link to="/destinos/$slug" params={{slug:d.slug}} className="destination-card"><div className="card-photo"><img src={d.image} alt={d.name} loading="lazy"/><span className="tag">{d.categories[0]}</span></div><div className="card-body"><div className="card-location"><MapPin/>{d.region}, Uruguay</div><div className="card-title-row"><h3>{d.name}</h3><span className="rating"><Star/>{d.rating}</span></div><p>{d.description}</p><div className="card-bottom"><span>Descubrir destino</span><ArrowUpRight/></div></div></Link>}
