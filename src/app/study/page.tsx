'use client';

import { AppLayout } from '@/components/AppLayout';
import { StudyGuide } from '@/components/study/StudyGuide';
import { useCollection, useFirebase } from '@/firebase';
import { collection } from 'firebase/firestore';
import { useMemo } from 'react';
import type { Question } from '@/lib/types';
import { Skeleton } from '@/components/ui/skeleton';

export default function StudyPage() {
  const { firestore } = useFirebase();
  const questionsCollection = useMemo(() => collection(firestore, 'questions'), [firestore]);
  const { data: questions, isLoading } = useCollection<Question>(questionsCollection);

  return (
    <AppLayout>
      <div className="flex flex-col gap-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Study Mode</h1>
          <p className="text-muted-foreground">
            Review all 200 official questions by category.
          </p>
        </div>
        {isLoading || !questions ? (
            <div className="space-y-4">
                <Skeleton className="h-16 w-full" />
                <Skeleton className="h-16 w-full" />
                <Skeleton className="h-16 w-full" />
                <Skeleton className="h-16 w-full" />
                <Skeleton className="h-16 w-full" />
            </div>
        ) : (
            <StudyGuide questions={questions} />
        )}
      </div>
    </AppLayout>
  );
}
