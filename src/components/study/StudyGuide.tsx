import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Card, CardContent } from '@/components/ui/card';
import type { StudyTopic, QuestionCategory } from '@/lib/types';

interface StudyGuideProps {
  topics: StudyTopic[];
}

export function StudyGuide({ topics }: StudyGuideProps) {
  const groupedTopics = topics.reduce((acc, topic) => {
    (acc[topic.category] = acc[topic.category] || []).push(topic);
    return acc;
  }, {} as Record<QuestionCategory, StudyTopic[]>);

  return (
    <Card>
      <CardContent className="p-0">
        <Accordion type="single" collapsible className="w-full">
          {Object.entries(groupedTopics).map(([category, categoryTopics]) => (
            <AccordionItem value={category} key={category}>
              <AccordionTrigger className="px-6 text-lg font-semibold hover:no-underline">
                {category}
              </AccordionTrigger>
              <AccordionContent className="px-6">
                <div className="space-y-4">
                  {categoryTopics.map((topic) => (
                    <div key={topic.id}>
                      <h3 className="font-bold text-md mb-1">{topic.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{topic.content}</p>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
    </Card>
  );
}
