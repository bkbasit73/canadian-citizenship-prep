'use client';

import { useState, useMemo } from 'react';
import { ArrowLeft, ArrowRight, RefreshCw } from 'lucide-react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import type { Question } from '@/lib/types';
import { cn } from '@/lib/utils';
import { Skeleton } from '../ui/skeleton';

interface FlashcardGameProps {
  questions: Question[];
}

const shuffleArray = <T,>(array: T[]): T[] => {
  return [...array].sort(() => Math.random() - 0.5);
};

export function FlashcardGame({ questions: allQuestions }: FlashcardGameProps) {
  const [shuffledQuestions, setShuffledQuestions] = useState(() => shuffleArray(allQuestions));
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const currentQuestion = useMemo(() => shuffledQuestions[currentIndex], [shuffledQuestions, currentIndex]);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleNext = () => {
    setIsFlipped(false); // Flip back to front for next question
    setCurrentIndex((prevIndex) => (prevIndex + 1) % shuffledQuestions.length);
  };
  
  const handlePrev = () => {
    setIsFlipped(false); // Flip back to front for previous question
    setCurrentIndex((prevIndex) => (prevIndex - 1 + shuffledQuestions.length) % shuffledQuestions.length);
  };

  const handleShuffle = () => {
    setIsFlipped(false);
    setShuffledQuestions(shuffleArray(allQuestions));
    setCurrentIndex(0);
  };
  
  if (!currentQuestion) {
      return <Skeleton className="h-[400px] w-full" />;
  }

  return (
    <div>
        <div className="flip-card-container h-[400px]" onClick={handleFlip}>
            <div className={cn('flip-card', isFlipped && 'flipped')}>
                {/* Card Front */}
                <div className="flip-card-front">
                    <Card className="h-full flex flex-col">
                        <CardContent className="flex-grow flex flex-col items-center justify-center p-6 text-center">
                            <Badge variant="secondary" className="mb-4">{currentQuestion.category}</Badge>
                            <p className="text-2xl font-bold">{currentQuestion.question}</p>
                        </CardContent>
                        <CardFooter className="justify-center">
                            <p className="text-sm text-muted-foreground">Click card to flip</p>
                        </CardFooter>
                    </Card>
                </div>

                {/* Card Back */}
                <div className="flip-card-back">
                    <Card className="h-full flex flex-col">
                        <CardContent className="flex-grow flex flex-col items-center justify-center p-6 text-center">
                            <div className="space-y-4">
                                <div>
                                    <p className="font-bold text-lg text-primary">{currentQuestion.answer}</p>
                                    <p className="text-sm text-muted-foreground">Answer</p>
                                </div>
                                <div>
                                    <p className="text-sm">{currentQuestion.explanation}</p>
                                    <p className="text-sm text-muted-foreground mt-1">Explanation</p>
                                </div>
                            </div>
                        </CardContent>
                         <CardFooter className="justify-center">
                            <p className="text-sm text-muted-foreground">Click card to flip</p>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </div>

        <div className="flex items-center justify-between mt-6">
            <Button variant="outline" onClick={handlePrev}>
                <ArrowLeft className="mr-2" />
                Prev
            </Button>
            <div className="text-sm text-muted-foreground">
                Card {currentIndex + 1} of {shuffledQuestions.length}
            </div>
             <Button variant="outline" onClick={handleShuffle}>
                <RefreshCw className="mr-2" />
                Shuffle
            </Button>
            <Button variant="outline" onClick={handleNext}>
                Next
                <ArrowRight className="ml-2" />
            </Button>
        </div>
    </div>
  );
}
