import { AppLayout } from '@/components/AppLayout';
import { StudyGuide } from '@/components/study/StudyGuide';
import { mockStudyTopics } from '@/lib/data';

export default function StudyPage() {
  return (
    <AppLayout>
      <div className="flex flex-col gap-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Study Guide</h1>
          <p className="text-muted-foreground">
            Review key topics for the Canadian Citizenship Test.
          </p>
        </div>
        <StudyGuide topics={mockStudyTopics} />
      </div>
    </AppLayout>
  );
}
