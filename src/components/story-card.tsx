import { useState } from 'react';
import { Heart, MapPin } from 'lucide-react';
import { Link } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { destinations } from '@/lib/destinations';
import type { Experience } from '@/lib/experiences';
export function StoryCard({story:s}:{story:Experience}){const [liked,setLiked]=useState(false);const d=destinations.find(d=>d.slug===s.destination);return <article className="story-card">{s.image&&<div className="story-photo"><img src={s.image} alt={`Viaje a ${d?.name||'Uruguay'}`} loading="lazy"/><span><MapPin/>{d?.name||'Uruguay'}</span></div>}<div className="story-body"><div className="story-person"><span className="avatar">{s.name.split(' ').map(n=>n[0]).slice(0,2).join('')}</span><div><strong>{s.name}</strong><small>{s.date}{s.sample?' · Experiencia de ejemplo':' · En este dispositivo'}</small></div></div><h3>{s.title}</h3><p>{s.text}</p><div className="story-actions"><Button variant="ghost" size="sm" aria-label={`Me gusta: ${s.title}`} aria-pressed={liked} onClick={()=>setLiked(!liked)}><Heart size={15} fill={liked?'currentColor':'none'}/>{s.likes+(liked?1:0)}</Button>{d&&<Link to="/destinos/$slug" params={{slug:d.slug}}>Ver destino ↗</Link>}</div></div></article>}
