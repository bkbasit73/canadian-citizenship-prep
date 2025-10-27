'use client';

import { AppLayout } from '@/components/AppLayout';
import { QuizClient } from '@/components/quiz/QuizClient';
import { useCollection, useFirebase } from '@/firebase';
import { collection } from 'firebase/firestore';
import { useMemo } from 'react';
import type { Question } from '@/lib/types';
import { Skeleton } from '@/components/ui/skeleton';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';

export default function PracticePage() {
  const { firestore } = useFirebase();
  const questionsCollection = useMemo(() => collection(firestore, 'questions'), [firestore]);
  const { data: questions, isLoading } = useCollection<Question>(questionsCollection);

  return (
    <AppLayout>
      <div className="flex flex-col gap-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Practice Quiz</h1>
          <p className="text-muted-foreground">
            Test your knowledge with randomized questions from Firestore.
          </p>
        </div>
        {isLoading || !questions ? (
          <Card className="max-w-2xl mx-auto w-full">
            <CardHeader>
              <Skeleton className="h-8 w-1/2 mb-2" />
              <Skeleton className="h-4 w-full" />
            </CardHeader>
            <CardContent className="space-y-6 pt-6">
              <Skeleton className="h-6 w-3/4" />
              <div className="space-y-4">
                <Skeleton className="h-12 w-full" />
                <Skeleton className="h-12 w-full" />
                <Skeleton className="h-12 w-full" />
                <Skeleton className="h-12 w-full" />
              </div>
            </CardContent>
            <CardFooter>
              <Skeleton className="h-10 w-28 ml-auto" />
            </CardFooter>
          </Card>
        ) : (
          <QuizClient allQuestions={questions} />
        )}
      </div>
    </AppLayout>
  );
}
