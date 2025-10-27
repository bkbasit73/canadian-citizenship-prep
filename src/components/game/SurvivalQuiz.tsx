'use client';

import { useState, useMemo, useEffect, useCallback } from 'react';
import { Clock, RefreshCw } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import type { Question } from '@/lib/types';
import { cn } from '@/lib/utils';
import { Skeleton } from '@/components/ui/skeleton';

interface SurvivalQuizProps {
  questions: Question[];
}

const TIME_PER_QUESTION = 40;

const CHALLENGE_LEVELS = [20, 40, 60, 100, 200];

const shuffleArray = <T,>(array: T[]): T[] => {
  return [...array].sort(() => Math.random() - 0.5);
};

export function SurvivalQuiz({ questions: allQuestions }: SurvivalQuizProps) {
  const [hasMounted, setHasMounted] = useState(false);
  const [shuffledQuestions, setShuffledQuestions] = useState<Question[]>([]);
  const [quizState, setQuizState] = useState<'not-started' | 'in-progress' | 'finished'>('not-started');
  const [timeLeft, setTimeLeft] = useState(TIME_PER_QUESTION);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [numQuestions, setNumQuestions] = useState(0);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const currentQuestion = useMemo(() => shuffledQuestions[currentQuestionIndex], [shuffledQuestions, currentQuestionIndex]);

  const handleNextQuestion = useCallback(() => {
    if (currentQuestionIndex < shuffledQuestions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedAnswer(null);
      setTimeLeft(TIME_PER_QUESTION);
    } else {
      setQuizState('finished');
    }
  }, [currentQuestionIndex, shuffledQuestions.length]);

  useEffect(() => {
    if (quizState !== 'in-progress') return;

    if (timeLeft <= 0) {
      handleNextQuestion();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [quizState, timeLeft, handleNextQuestion]);

  const handleAnswerSubmit = (answer: string) => {
    if (answer === currentQuestion.answer) {
      setScore((prev) => prev + 1);
    }
    setTimeout(() => {
      handleNextQuestion();
    }, 500);
  };
  
  const handleStartQuiz = (level: number) => {
    const questionCount = Math.min(level, allQuestions.length);
    setNumQuestions(questionCount);
    setShuffledQuestions(shuffleArray(allQuestions).slice(0, questionCount));
    setCurrentQuestionIndex(0);
    setScore(0);
    setTimeLeft(TIME_PER_QUESTION);
    setQuizState('in-progress');
  };

  const handleRestart = () => {
    setQuizState('not-started');
    setNumQuestions(0);
  };

  if (!hasMounted) {
    return (
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
          </Card>
    )
  }

  if (quizState === 'not-started') {
    return (
      <Card className="max-w-2xl mx-auto text-center">
        <CardHeader>
          <CardTitle>Choose Your Challenge</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-6">Select the number of questions for your quiz.</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {CHALLENGE_LEVELS.map((level) => (
                <Button key={level} variant="outline" size="lg" onClick={() => handleStartQuiz(level)} disabled={level > allQuestions.length}>
                    {level} Questions
                </Button>
            ))}
          </div>
        </CardContent>
      </Card>
    );
  }

  if (quizState === 'finished') {
    const accuracy = shuffledQuestions.length > 0 ? (score / shuffledQuestions.length) * 100 : 0;
    return (
      <Card className="max-w-2xl mx-auto text-center">
        <CardHeader>
          <CardTitle>Game Over!</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-lg">You survived {shuffledQuestions.length} questions!</p>
          <p className="text-5xl font-bold">{score} / {shuffledQuestions.length}</p>
          <p className={cn("font-semibold", accuracy >= 80 ? 'text-green-600' : 'text-destructive')}>
            Accuracy: {accuracy.toFixed(0)}%
          </p>
        </CardContent>
        <CardFooter className="justify-center">
          <Button onClick={handleRestart}>
            <RefreshCw className="mr-2 h-4 w-4"/>
            Play Again
          </Button>
        </CardFooter>
      </Card>
    );
  }

  if (!currentQuestion) {
    return (
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
          </Card>
    )
  }

  const timeProgress = (timeLeft / TIME_PER_QUESTION) * 100;

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <div className="flex justify-between items-center mb-2">
            <CardTitle>Question {currentQuestionIndex + 1} of {shuffledQuestions.length}</CardTitle>
            <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-lg font-semibold text-muted-foreground">
                    <Clock className="h-5 w-5" />
                    <span>{timeLeft}s</span>
                </div>
                <Badge variant="secondary">{currentQuestion.category}</Badge>
            </div>
        </div>
        <Progress value={timeProgress} className={cn(timeLeft <= 5 && 'animate-pulse', timeProgress < 20 ? '[&>div]:bg-destructive' : '')} />
      </CardHeader>
      <CardContent className="space-y-6">
        <p className="text-lg font-semibold">{currentQuestion.question}</p>
        <RadioGroup
          value={selectedAnswer ?? ''}
          onValueChange={(value) => {
            setSelectedAnswer(value);
            handleAnswerSubmit(value);
          }}
        >
          {currentQuestion.options.map((option, index) => (
              <Label
                key={index}
                className="flex items-center space-x-3 rounded-md border p-4 transition-colors cursor-pointer hover:bg-accent hover:text-accent-foreground"
              >
                <RadioGroupItem value={option} />
                <span>{option}</span>
              </Label>
          ))}
        </RadioGroup>
      </CardContent>
    </Card>
  );
}
