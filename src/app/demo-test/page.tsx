import { AppLayout } from '@/components/AppLayout';
import { DemoTest } from '@/components/demo-test/DemoTest';
import { mockQuestions } from '@/lib/data';
import type { Question } from '@/lib/types';

export default function DemoTestPage() {
  const allQuestions: Question[] = mockQuestions;

  return (
    <AppLayout>
      <div className="max-w-4xl mx-auto w-full">
        <div className="flex flex-col gap-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">
              Official Practice Test
            </h1>
            <p className="text-muted-foreground">
              Simulates the real test: 20 questions, 45 minutes, 15 correct answers to pass.
            </p>
          </div>
          <DemoTest allQuestions={allQuestions} />
        </div>
      </div>
    </AppLayout>
  );
}
