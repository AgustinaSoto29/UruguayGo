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
  'Joyas ocultas': Sparkles,
};

export const Route = createFileRoute('/')({
  head: () =>
    pageHead(
      'UruguayGo — Descubrí tu próximo destino',
      'Playas, naturaleza, cultura y experiencias para descubrir Uruguay a tu manera.',
      heroImage,
    ),
  component: Home
