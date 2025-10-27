'use client';

import { AppLayout } from '@/components/AppLayout';
import { StudyCard } from '@/components/study/StudyCard';
import { useCollection, useFirebase } from '@/firebase';
import { collection } from 'firebase/firestore';
import { useMemo } from 'react';
import type { StudyTopic } from '@/lib/types';
import { Skeleton } from '@/components/ui/skeleton';

export default function StudyPage() {
  const { firestore } = useFirebase();
  const studyTopicsCollection = useMemo(() => collection(firestore, 'study_topics'), [firestore]);
  const { data: topics, isLoading } = useCollection<StudyTopic>(studyTopicsCollection);

  return (
    <AppLayout>
      <div className="flex flex-col gap-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Study Guide</h1>
          <p className="text-muted-foreground">
            Explore key topics for the Canadian Citizenship Test. Click on a card to flip it.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {isLoading ? (
            Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="h-96">
                <Skeleton className="w-full h-full" />
              </div>
            ))
          ) : (
            topics?.map((topic) => (
              <StudyCard key={topic.id} topic={topic} />
            ))
          )}
        </div>
      </div>
    </AppLayout>
  );
}
