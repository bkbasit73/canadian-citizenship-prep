'use client';

import { AppLayout } from '@/components/AppLayout';
import { StudyGuide } from '@/components/study/StudyGuide';
import { mockStudyTopics } from '@/lib/data';
import type { StudyTopic } from '@/lib/types';

export default function StudyPage() {
  // Directly use the mock study topics from the data file
  const topics: StudyTopic[] = mockStudyTopics;

  return (
    <AppLayout>
      <div className="flex flex-col gap-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Study Guide</h1>
          <p className="text-muted-foreground">
            Explore key topics for the citizenship test. Click a card to flip it and learn more.
          </p>
        </div>
        <StudyGuide topics={topics} />
      </div>
    </AppLayout>
  );
}
