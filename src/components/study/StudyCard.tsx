'use client';

import { useState } from 'react';
import Image from 'next/image';
import type { StudyTopic } from '@/lib/types';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface StudyCardProps {
  topic: StudyTopic;
}

export function StudyCard({ topic }: StudyCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className={cn('flip-card-container h-96', { flipped: isFlipped })}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className="flip-card">
        <div className="flip-card-front">
          <Card className="overflow-hidden h-full flex flex-col">
            <div className="relative w-full aspect-[16/10] flex-shrink-0">
              <Image
                src={topic.imageUrl ?? 'https://picsum.photos/seed/placeholder/400/250'}
                alt={topic.title}
                fill
                className="object-cover"
                data-ai-hint={topic.imageHint}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
               <div className="absolute bottom-0 p-4">
                 <CardTitle className="text-xl text-white leading-tight">{topic.title}</CardTitle>
               </div>
            </div>
            <CardContent className="flex-grow flex flex-col justify-center items-center p-4">
              <Badge variant="secondary" className="mb-4">{topic.category}</Badge>
              <p className="text-center text-muted-foreground text-sm">Click to reveal details</p>
            </CardContent>
          </Card>
        </div>
        <div className="flip-card-back">
          <Card className="h-full overflow-hidden flex flex-col">
            <CardHeader>
              <CardTitle className="text-xl">{topic.title}</CardTitle>
              <Badge variant="secondary" className="w-fit">{topic.category}</Badge>
            </CardHeader>
            <CardContent className="flex-grow overflow-y-auto p-4">
              <p className="text-muted-foreground text-sm leading-relaxed">{topic.content}</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
