'use client';

import { AppLayout } from '@/components/AppLayout';
import { StudyGuide } from '@/components/study/StudyGuide';
import { mockQuestions } from '@/lib/data';
import type { Question } from '@/lib/types';

export default function StudyPage() {
  // Directly use the mock questions from the data file
  const questions: Question[] = mockQuestions;

  return (
    <AppLayout>
      <div className="flex flex-col gap-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Study Mode</h1>
          <p className="text-muted-foreground">
            Review all 200 official questions by category.
          </p>
        </div>
        <StudyGuide questions={questions} />
      </div>
    </AppLayout>
  );
}
