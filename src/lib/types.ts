export type QuestionCategory =
  | 'Rights and Responsibilities'
  | 'History'
  | 'Government'
  | 'Geography'
  | 'Symbols';

export type Question = {
  id: string; // Changed to string to match Firestore document ID
  question: string;
  options: string[];
  answer: string;
  category: QuestionCategory;
  explanation: string;
};

export type StudyTopic = {
  id: string;
  title: string;
  content: string;
  category: QuestionCategory;
  imageUrl?: string;
  imageHint?: string;
};

export type UserPerformance = {
  userId: string;
  totalCorrect: number;
  totalAnswered: number;
  categoryPerformance: Record<
    QuestionCategory,
    {
      correct: number;
      total: number;
    }
  >;
};
