'use client';

import { AppLayout } from '@/components/AppLayout';
import { FlashcardGame } from '@/components/game/FlashcardGame';
import { mockQuestions } from '@/lib/data';
import type { Question } from '@/lib/types';

export default function GamePage() {
  const allQuestions: Question[] = mockQuestions;

  return (
    <AppLayout>
      <div className="max-w-4xl mx-auto w-full">
        <div className="flex flex-col gap-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Flashcard Game</h1>
            <p className="text-muted-foreground">
              Test your memory. Flip the card to see the answer.
            </p>
          </div>
          <FlashcardGame questions={allQuestions} />
        </div>
      </div>
    </AppLayout>
  );
}
