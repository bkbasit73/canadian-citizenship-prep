'use client';

import { useState, useMemo, useEffect, useCallback } from 'react';
import { CheckCircle, XCircle, ArrowRight, RefreshCw, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import type { Question } from '@/lib/types';
import { cn } from '@/lib/utils';
import { Skeleton } from '@/components/ui/skeleton';

interface QuizClientProps {
  allQuestions: Question[];
}

type QuizState = 'not-started' | 'in-progress' | 'finished';

const shuffleArray = <T,>(array: T[]): T[] => {
  return [...array].sort(() => Math.random() - 0.5);
};

const CHALLENGE_LEVELS = [
    { level: 20, timePerQuestion: 30 },
    { level: 40, timePerQuestion: 25 },
    { level: 60, timePerQuestion: 20 },
    { level: 100, timePerQuestion: 15 },
    { level: 200, timePerQuestion: 10 },
];

export function QuizClient({ allQuestions }: QuizClientProps) {
  const [hasMounted, setHasMounted] = useState(false);
  const [quizState, setQuizState] = useState<QuizState>('not-started');
  const [questions, setQuestions] = useState<Question[]>([]);
  const [numQuestions, setNumQuestions] = useState(0);
  const [timePerQuestion, setTimePerQuestion] = useState(30);
  const [timeLeft, setTimeLeft] = useState(timePerQuestion);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const currentQuestion = useMemo(() => questions[currentQuestionIndex], [questions, currentQuestionIndex]);

  const handleNextQuestion = useCallback(() => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedAnswer(null);
      setIsAnswered(false);
      setTimeLeft(timePerQuestion);
    } else {
      setQuizState('finished');
    }
  }, [currentQuestionIndex, questions.length, timePerQuestion]);

  useEffect(() => {
    if (quizState !== 'in-progress') return;

    if (timeLeft <= 0 && !isAnswered) {
      setIsAnswered(true); // Mark as answered to show feedback
      // No score update since time ran out
      const timeout = setTimeout(() => handleNextQuestion(), 2000); // Wait 2s before moving on
      return () => clearTimeout(timeout);
    }
    
    if (isAnswered) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [quizState, timeLeft, isAnswered, handleNextQuestion]);

  const handleStartQuiz = (level: number, time: number) => {
    const questionCount = Math.min(level, allQuestions.length);
    setNumQuestions(questionCount);
    setTimePerQuestion(time);
    setTimeLeft(time);
    setQuestions(shuffleArray(allQuestions).slice(0, questionCount));
    setCurrentQuestionIndex(0);
    setScore(0);
    setIsAnswered(false);
    setSelectedAnswer(null);
    setQuizState('in-progress');
  };

  const handleRestart = () => {
    setQuizState('not-started');
    setNumQuestions(0);
  };

  const handleAnswerSubmit = () => {
    if (!selectedAnswer) return;
    setIsAnswered(true);
    if (selectedAnswer === currentQuestion.answer) {
      setScore((prev) => prev + 1);
    }
  };

  if (!hasMounted) {
    return (
      <Card className="max-w-2xl mx-auto w-full">
          <CardHeader>
            <Skeleton className="h-8 w-1/2 mb-2" />
          </CardHeader>
          <CardContent>
            <Skeleton className="h-4 w-3/4 mb-6" />
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              <Skeleton className="h-12 w-full" />
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
            {CHALLENGE_LEVELS.map(({level, time}) => (
                <Button key={level} variant="outline" size="lg" onClick={() => handleStartQuiz(level, time)} disabled={level > allQuestions.length}>
                    {level} Questions
                </Button>
            ))}
          </div>
        </CardContent>
      </Card>
    );
  }

  if (quizState === 'finished') {
    const accuracy = questions.length > 0 ? (score / questions.length) * 100 : 0;
    return (
      <Card className="max-w-2xl mx-auto text-center">
        <CardHeader>
          <CardTitle>Challenge Complete!</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-lg">You scored</p>
          <p className="text-5xl font-bold">{score} / {questions.length}</p>
          <p className={cn("font-semibold", accuracy >= 80 ? 'text-green-600' : 'text-destructive')}>
            Accuracy: {accuracy.toFixed(0)}%
          </p>
        </CardContent>
        <CardFooter className="justify-center">
          <Button onClick={handleRestart}>
            <RefreshCw className="mr-2 h-4 w-4"/>
            New Challenge
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
            <CardFooter>
              <Skeleton className="h-10 w-28 ml-auto" />
            </CardFooter>
          </Card>
    )
  }

  const timeProgress = (timeLeft / timePerQuestion) * 100;

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <div className="flex justify-between items-center mb-2">
            <CardTitle>Question {currentQuestionIndex + 1} of {questions.length}</CardTitle>
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
          onValueChange={setSelectedAnswer}
          disabled={isAnswered}
        >
          {currentQuestion.options.map((option, index) => {
            const isCorrect = option === currentQuestion.answer;
            const isSelected = option === selectedAnswer;
            const feedbackIcon = isCorrect ? <CheckCircle className="h-5 w-5 text-green-500" /> : <XCircle className="h-5 w-5 text-red-500" />;
            
            return (
              <Label
                key={index}
                className={cn(
                  "flex items-center space-x-3 rounded-md border p-4 transition-colors",
                  "cursor-pointer hover:bg-accent hover:text-accent-foreground",
                  isSelected && "border-primary",
                  isAnswered && isCorrect && "border-green-500 bg-green-500/10",
                  isAnswered && isSelected && !isCorrect && "border-red-500 bg-red-500/10"
                )}
              >
                <RadioGroupItem value={option} />
                <span>{option}</span>
                {isAnswered && (isSelected || isCorrect) && (
                    <div className="ml-auto pl-2">{feedbackIcon}</div>
                )}
              </Label>
            );
          })}
        </RadioGroup>

        {isAnswered && timeLeft <= 0 && (
            <div className="rounded-md border-l-4 bg-destructive/20 p-4 border-destructive text-center">
                <p className="font-bold">Time&apos;s up!</p>
            </div>
        )}

        {isAnswered && (
          <div className="rounded-md border-l-4 bg-muted p-4 border-primary">
            <p className="font-semibold">Explanation:</p>
            <p className="text-muted-foreground text-sm">{currentQuestion.explanation}</p>
          </div>
        )}
      </CardContent>
      <CardFooter>
        {isAnswered ? (
          <Button onClick={handleNextQuestion} className="ml-auto">
            {currentQuestionIndex < questions.length - 1 ? 'Next Question' : 'Finish Quiz'}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        ) : (
          <Button onClick={handleAnswerSubmit} disabled={!selectedAnswer} className="ml-auto">
            Check Answer
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
