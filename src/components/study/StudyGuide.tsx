import type { StudyTopic } from '@/lib/types';
import { StudyCard } from './StudyCard';

interface StudyGuideProps {
  topics: StudyTopic[];
}

export function StudyGuide({ topics }: StudyGuideProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {topics.map((topic) => (
        <StudyCard key={topic.id} topic={topic} />
      ))}
    </div>
  );
}
