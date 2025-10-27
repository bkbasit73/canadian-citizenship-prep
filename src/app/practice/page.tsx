import { AppLayout } from '@/components/AppLayout';
import { QuizClient } from '@/components/quiz/QuizClient';
import { mockQuestions } from '@/lib/data';

export default function PracticePage() {
  return (
    <AppLayout>
       <div className="flex flex-col gap-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Practice Quiz</h1>
          <p className="text-muted-foreground">
            Test your knowledge with randomized questions.
          </p>
        </div>
        <QuizClient allQuestions={mockQuestions} />
      </div>
    </AppLayout>
  );
}
