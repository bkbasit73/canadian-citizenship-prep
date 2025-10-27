'use client';

import { useState, useMemo, useEffect, useCallback } from 'react';
import { ArrowRight, RefreshCw, CheckCircle, XCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import type { Question } from '@/lib/types';
import { cn } from '@/lib/utils';
import { Skeleton } from '@/components/ui/skeleton';
import { Alert, AlertDescription, AlertTitle } from '../ui/alert';

interface DemoTestProps {
  allQuestions: Question[];
}

const TEST_DURATION_MINUTES = 30;
const TEST_QUESTION_COUNT = 20;
const PASSING_SCORE = 15;

const shuffleArray = <T,>(array: T[]): T[] => {
  return [...array].sort(() => Math.random() - 0.5);
};

export function DemoTest({ allQuestions }: DemoTestProps) {
  const [testState, setTestState] = useState<'not-started' | 'in-progress' | 'finished'>('not-started');
  const [questions, setQuestions] = useState<Question[]>([]);
  const [timeLeft, setTimeLeft] = useState(TEST_DURATION_MINUTES * 60);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<(string | null)[]>([]);
  const [score, setScore] = useState(0);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const currentQuestion = useMemo(() => questions[currentQuestionIndex], [questions, currentQuestionIndex]);

  const handleNextQuestion = useCallback(() => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      setTestState('finished');
    }
  }, [currentQuestionIndex, questions.length]);
  
  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
    }
  };

  useEffect(() => {
    if (testState !== 'in-progress') return;

    if (timeLeft <= 0) {
      setTestState('finished');
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [testState, timeLeft]);
  
  useEffect(() => {
      if (testState === 'finished') {
          let finalScore = 0;
          questions.forEach((q, index) => {
              if(q.answer === answers[index]) {
                  finalScore++;
              }
          });
          setScore(finalScore);
      }
  }, [testState, answers, questions]);

  const handleStartTest = () => {
    const shuffled = shuffleArray(allQuestions);
    setQuestions(shuffled.slice(0, TEST_QUESTION_COUNT));
    setAnswers(new Array(TEST_QUESTION_COUNT).fill(null));
    setCurrentQuestionIndex(0);
    setScore(0);
    setTimeLeft(TEST_DURATION_MINUTES * 60);
    setTestState('in-progress');
  };

  const handleRestart = () => {
    setTestState('not-started');
  };
  
  const handleAnswerSelect = (answer: string) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = answer;
    setAnswers(newAnswers);
  };
  
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  
  if (!hasMounted) {
    return null;
  }

  if (testState === 'not-started') {
    return (
      <Card className="max-w-2xl mx-auto text-center">
        <CardHeader>
          <CardTitle>Official Practice Test</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-6">
            This test simulates the real Canadian Citizenship Test. You will have{' '}
            <strong>{TEST_DURATION_MINUTES} minutes</strong> to answer{' '}
            <strong>{TEST_QUESTION_COUNT} questions</strong>. You must get at least{' '}
            <strong>{PASSING_SCORE} correct</strong> to pass.
          </p>
          <Button size="lg" onClick={handleStartTest}>
            Start Test
          </Button>
        </CardContent>
      </Card>
    );
  }

  if (testState === 'finished') {
    const isPassed = score >= PASSING_SCORE;
    return (
      <Card className="max-w-2xl mx-auto">
        <CardHeader className="text-center">
          <CardTitle>Test Complete!</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="text-center">
            <p className="text-lg">You scored</p>
            <p className="text-5xl font-bold">{score} / {TEST_QUESTION_COUNT}</p>
          </div>

          <Alert variant={isPassed ? 'default' : 'destructive'} className={cn(isPassed && 'bg-green-500/10 border-green-500')}>
            {isPassed ? <CheckCircle className="h-4 w-4" /> : <XCircle className="h-4 w-4" />}
            <AlertTitle>{isPassed ? 'Congratulations, you passed!' : 'You did not pass.'}</AlertTitle>
            <AlertDescription>
              {isPassed 
                ? 'You have met the requirement of 15 correct answers.' 
                : `You needed at least ${PASSING_SCORE} correct answers to pass. Keep studying and try again!`
              }
            </AlertDescription>
          </Alert>

          <div className="space-y-4">
              <h3 className="text-xl font-semibold">Review Your Answers</h3>
              {questions.map((q, index) => (
                  <div key={q.id} className="border-b pb-4">
                      <p className="font-semibold">{index + 1}. {q.question}</p>
                      <p className={cn("text-sm", answers[index] === q.answer ? 'text-green-600' : 'text-destructive')}>
                          Your answer: {answers[index] ?? 'Not answered'}
                      </p>
                      {answers[index] !== q.answer && <p className="text-sm text-green-700">Correct answer: {q.answer}</p>}
                  </div>
              ))}
          </div>
        </CardContent>
        <CardFooter className="justify-center">
          <Button onClick={handleRestart}>
            <RefreshCw className="mr-2 h-4 w-4"/>
            Try Again
          </Button>
        </CardFooter>
      </Card>
    );
  }

  if (!currentQuestion) {
    return <Skeleton className="h-[400px] w-full" />
  }

  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <div className="flex justify-between items-center mb-4">
            <CardTitle>Question {currentQuestionIndex + 1} of {questions.length}</CardTitle>
            <Badge variant="outline" className="text-lg">
                {minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}
            </Badge>
        </div>
        <Progress value={progress} />
      </CardHeader>
      <CardContent className="space-y-6">
        <p className="text-lg font-semibold">{currentQuestion.question}</p>
        <RadioGroup
          value={answers[currentQuestionIndex] ?? ''}
          onValueChange={handleAnswerSelect}
        >
          {currentQuestion.options.map((option, index) => (
              <Label
                key={index}
                className="flex items-center space-x-3 rounded-md border p-4 transition-colors cursor-pointer hover:bg-accent hover:text-accent-foreground has-[[data-state=checked]]:border-primary"
              >
                <RadioGroupItem value={option} />
                <span>{option}</span>
              </Label>
          ))}
        </RadioGroup>
      </CardContent>
      <CardFooter className="justify-between">
         <Button variant="outline" onClick={handlePreviousQuestion} disabled={currentQuestionIndex === 0}>
            Previous
         </Button>
         <Button onClick={handleNextQuestion}>
            {currentQuestionIndex < questions.length - 1 ? 'Next' : 'Finish'}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
      </CardFooter>
    </Card>
  );
}
