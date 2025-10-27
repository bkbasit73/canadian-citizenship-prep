'use client';

import { useEffect, useState } from 'react';
import { Lightbulb } from 'lucide-react';

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { getPersonalizedStudyTips, PersonalizedStudyTipsInput, PersonalizedStudyTipsOutput } from '@/ai/flows/personalized-study-tips';

interface SmartTipsProps {
  performanceData: PersonalizedStudyTipsInput;
}

export function SmartTips({ performanceData }: SmartTipsProps) {
  const [tips, setTips] = useState<PersonalizedStudyTipsOutput | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchTips() {
      try {
        setLoading(true);
        const input = {
          userId: performanceData.userId,
          totalCorrectAnswers: performanceData.totalCorrect,
          totalQuestionsAnswered: performanceData.totalAnswered,
          categoryPerformance: Object.entries(performanceData.categoryPerformance).reduce(
            (acc, [category, { correct, total }]) => {
              acc[category] = total > 0 ? Math.round((correct / total) * 100) : 0;
              return acc;
            },
            {} as Record<string, number>
          ),
        };
        const result = await getPersonalizedStudyTips(input);
        setTips(result);
      } catch (err) {
        setError('Failed to generate study tips. Please try again later.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchTips();
  }, [performanceData]);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Lightbulb className="text-primary" />
          AI-Powered Study Tips
        </CardTitle>
        <CardDescription>
          Personalized advice based on your performance.
        </CardDescription>
      </CardHeader>
      <CardContent>
        {loading && (
          <div className="space-y-3">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-[80%]" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-[70%]" />
          </div>
        )}
        {error && <p className="text-sm text-destructive">{error}</p>}
        {tips && !loading && (
          <ul className="space-y-3">
            {tips.studyTips.map((tip, index) => (
              <li key={index} className="flex items-start gap-3 text-sm">
                <span className="text-primary font-bold mt-1">&bull;</span>
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        )}
      </CardContent>
    </Card>
  );
}
