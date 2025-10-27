import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Card, CardContent } from '@/components/ui/card';
import type { Question, QuestionCategory } from '@/lib/types';
import { Badge } from '../ui/badge';

interface StudyGuideProps {
  questions: Question[];
}

export function StudyGuide({ questions }: StudyGuideProps) {
  const groupedQuestions = questions.reduce((acc, question) => {
    const category = question.category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(question);
    return acc;
  }, {} as Record<QuestionCategory, Question[]>);

  return (
    <Card>
      <CardContent className="p-0">
        <Accordion type="single" collapsible className="w-full">
          {Object.entries(groupedQuestions).map(([category, categoryQuestions]) => (
            <AccordionItem value={category} key={category}>
              <AccordionTrigger className="px-6 text-lg font-semibold hover:no-underline">
                <div className="flex items-center gap-4">
                  <span>{category}</span>
                  <Badge variant="secondary">{categoryQuestions.length} Questions</Badge>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6">
                <div className="space-y-6">
                  {categoryQuestions.map((question) => (
                    <div key={question.id} className="p-4 border rounded-lg bg-muted/50">
                      <p className="font-bold text-md mb-2">{question.question}</p>
                      <ul className="space-y-1 list-disc list-inside mb-3 text-sm">
                        {question.options.map((option, index) => (
                          <li
                            key={index}
                            className={
                              option === question.answer
                                ? 'font-semibold text-green-700'
                                : 'text-muted-foreground'
                            }
                          >
                            {option}
                          </li>
                        ))}
                      </ul>
                      <div>
                         <p className="font-semibold text-sm">Explanation:</p>
                         <p className="text-muted-foreground text-sm leading-relaxed">{question.explanation}</p>
                      </div>
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
