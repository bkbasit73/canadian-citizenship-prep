'use client';

import Image from 'next/image';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Card, CardContent } from '@/components/ui/card';
import type { Question } from '@/lib/types';

interface QuestionCardProps {
  question: Question;
}

export function QuestionCard({ question }: QuestionCardProps) {
  return (
    <Card>
      <CardContent className="p-4">
        <div className="flex flex-col gap-4">
          {question.imageUrl && (
            <div className="relative w-full h-48 rounded-md overflow-hidden">
              <Image
                src={question.imageUrl}
                alt={question.question}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                data-ai-hint={question.imageHint}
              />
            </div>
          )}
          <div className="flex-grow">
            <p className="font-semibold text-lg">{question.question}</p>
            <div className="mt-2">
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
                        <span className="font-bold text-foreground">
                          Explanation:{' '}
                        </span>
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
