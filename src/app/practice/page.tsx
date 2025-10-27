import { AppLayout } from '@/components/AppLayout';
import { QuizClient } from '@/components/quiz/QuizClient';
import { mockQuestions } from '@/lib/data';
import type { Question } from '@/lib/types';

export default function PracticePage() {
  // Directly use the mock questions from the data file
  const allQuestions: Question[] = mockQuestions;

  return (
    <AppLayout>
      <div className="max-w-4xl mx-auto w-full">
        <div className="flex flex-col gap-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Timed Challenge</h1>
            <p className="text-muted-foreground">
              Test your knowledge against the clock. Choose your challenge!
            </p>
          </div>
          <QuizClient allQuestions={allQuestions} />
        </div>
      </div>
    </AppLayout>
  );
}
