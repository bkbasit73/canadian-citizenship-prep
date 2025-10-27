'use client';

import Image from 'next/image';
import type { StudyTopic } from '@/lib/types';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface StudyCardProps {
  topic: StudyTopic;
}

export function StudyCard({ topic }: StudyCardProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1 cursor-pointer flex flex-col">
      <div className="relative w-full aspect-[16/10]">
        <Image
          src={topic.imageUrl ?? 'https://picsum.photos/seed/placeholder/400/250'}
          alt={topic.title}
          fill
          className="object-cover"
          data-ai-hint={topic.imageHint}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
      </div>
      <CardHeader className="flex-grow">
        <CardTitle className="text-lg leading-tight">{topic.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <Badge variant="secondary">{topic.category}</Badge>
      </CardContent>
    </Card>
  );
}
