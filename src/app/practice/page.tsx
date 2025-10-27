'use client';

import { AppLayout } from '@/components/AppLayout';
import { QuizClient } from '@/components/quiz/QuizClient';
import { mockQuestions } from '@/lib/data';
import type { Question } from '@/lib/types';

export default function PracticePage() {
  // Directly use the mock questions from the data file
  const allQuestions: Question[] = mockQuestions;

  return (
    <AppLayout>
      <div className="flex flex-col gap-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Challenge Mode</h1>
          <p className="text-muted-foreground">
            Test your knowledge with a timed quiz. Choose your challenge!
          </p>
        </div>
        <QuizClient allQuestions={allQuestions} />
      </div>
    </AppLayout>
  );
}
