'use client';

import Image from 'next/image';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { Question } from '@/lib/types';
import { categoryImages } from '@/lib/data';

interface QuestionCardProps {
  question: Question;
}

export function QuestionCard({ question }: QuestionCardProps) {
  const { imageUrl, imageHint } = categoryImages[question.category];

  return (
    <Card>
      <CardContent className="p-4">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="relative w-full md:w-1/3 aspect-video flex-shrink-0 rounded-md overflow-hidden">
            <Image
              src={imageUrl}
              alt={question.category}
              fill
              className="object-cover"
              data-ai-hint={imageHint}
            />
          </div>
          <div className="flex-grow">
            <p className="font-semibold">{question.question}</p>
            <div className="mt-4">
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-sm">
                    Show Answer and Explanation
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-3 pt-2">
                        <p className="text-sm">
                            <span className="font-bold">Answer: </span> 
                            {question.answer}
                        </p>
                        <p className="text-sm text-muted-foreground">
                            <span className="font-bold text-foreground">Explanation: </span> 
                            {question.explanation}
                        </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
