import { AppLayout } from '@/components/AppLayout';
import { SurvivalQuiz } from '@/components/game/SurvivalQuiz';
import { mockQuestions } from '@/lib/data';
import type { Question } from '@/lib/types';

export default function GamePage() {
  const allQuestions: Question[] = mockQuestions;

  return (
    <AppLayout>
      <div className="max-w-4xl mx-auto w-full">
        <div className="flex flex-col gap-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Survival Mode</h1>
            <p className="text-muted-foreground">
              Answer as many questions as you can. You have 40 seconds for each!
            </p>
          </div>
          <SurvivalQuiz questions={allQuestions} />
        </div>
      </div>
    </AppLayout>
  );
}
