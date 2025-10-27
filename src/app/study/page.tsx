import { AppLayout } from '@/components/AppLayout';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { mockQuestions } from '@/lib/data';
import type { Question, QuestionCategory } from '@/lib/types';
import { QuestionCard } from '@/components/study/QuestionCard';

export default function StudyPage() {
  const questionsByCategory = mockQuestions.reduce(
    (acc, question) => {
      if (!acc[question.category]) {
        acc[question.category] = [];
      }
      acc[question.category].push(question);
      return acc;
    },
    {} as Record<QuestionCategory, Question[]>
  );

  const categories = Object.keys(questionsByCategory) as QuestionCategory[];

  return (
    <AppLayout>
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col gap-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Study Mode</h1>
            <p className="text-muted-foreground">
              Review all questions by category. Click a question to see the answer.
            </p>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {categories.map((category) => (
              <AccordionItem key={category} value={category}>
                <AccordionTrigger className="text-2xl font-bold py-6">
                  {category}
                </AccordionTrigger>
                <AccordionContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {questionsByCategory[category].map((question) => (
                      <QuestionCard key={question.id} question={question} />
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </AppLayout>
  );
}
