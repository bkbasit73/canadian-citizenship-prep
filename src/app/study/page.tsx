import { AppLayout } from '@/components/AppLayout';
import { StudyCard } from '@/components/study/StudyCard';
import { mockStudyTopics } from '@/lib/data';

export default function StudyPage() {
  return (
    <AppLayout>
      <div className="flex flex-col gap-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Study Guide</h1>
          <p className="text-muted-foreground">
            Explore key topics for the Canadian Citizenship Test. Hover over a card to flip it.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockStudyTopics.map((topic) => (
            <StudyCard key={topic.id} topic={topic} />
          ))}
        </div>
      </div>
    </AppLayout>
  );
}
