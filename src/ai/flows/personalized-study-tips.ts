'use server';

/**
 * @fileOverview This file defines a Genkit flow for providing personalized study tips to users based on their quiz performance.
 *
 * - `getPersonalizedStudyTips`: This is the main function that takes user performance data as input and returns personalized study tips.
 * - `PersonalizedStudyTipsInput`: This interface defines the structure of the input data required for generating study tips.
 * - `PersonalizedStudyTipsOutput`: This interface defines the structure of the output, which includes the personalized study tips.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

// Define the input schema for the personalized study tips flow
const PersonalizedStudyTipsInputSchema = z.object({
  userId: z.string().describe('The unique identifier of the user.'),
  categoryPerformance: z
    .record(z.string(), z.number())
    .describe(
      'A map of category names to performance scores (0-100), indicating the user performance in each category.'
    ),
  totalCorrectAnswers: z
    .number()
    .describe('The total number of correct answers by the user.'),
  totalQuestionsAnswered: z
    .number()
    .describe('The total number of questions answered by the user.'),
});

export type PersonalizedStudyTipsInput = z.infer<
  typeof PersonalizedStudyTipsInputSchema
>;

// Define the output schema for the personalized study tips flow
const PersonalizedStudyTipsOutputSchema = z.object({
  studyTips: z
    .array(z.string())
    .describe(
      'An array of personalized study tips tailored to the user performance.'
    ),
});

export type PersonalizedStudyTipsOutput = z.infer<
  typeof PersonalizedStudyTipsOutputSchema
>;

// Main function to get personalized study tips
export async function getPersonalizedStudyTips(
  input: PersonalizedStudyTipsInput
): Promise<PersonalizedStudyTipsOutput> {
  return personalizedStudyTipsFlow(input);
}

// Define the prompt for generating personalized study tips
const personalizedStudyTipsPrompt = ai.definePrompt({
  name: 'personalizedStudyTipsPrompt',
  input: {schema: PersonalizedStudyTipsInputSchema},
  output: {schema: PersonalizedStudyTipsOutputSchema},
  prompt: `You are an AI assistant designed to provide personalized study tips for users preparing for the Canadian Citizenship Test.
  Analyze the user's performance data, including category-specific performance and overall test scores, to identify areas where the user needs the most improvement.
  Suggest optimal study strategies based on this analysis.

  User ID: {{{userId}}}
  Category Performance: {{{categoryPerformance}}}
  Total Correct Answers: {{{totalCorrectAnswers}}}
  Total Questions Answered: {{{totalQuestionsAnswered}}}

  Based on this information, provide a list of study tips to help the user improve their chances of passing the test. Be concise and actionable.
  The response should be an array of strings, each representing a study tip.
  `,
});

// Define the Genkit flow for personalized study tips
const personalizedStudyTipsFlow = ai.defineFlow(
  {
    name: 'personalizedStudyTipsFlow',
    inputSchema: PersonalizedStudyTipsInputSchema,
    outputSchema: PersonalizedStudyTipsOutputSchema,
  },
  async input => {
    const {output} = await personalizedStudyTipsPrompt(input);
    return output!;
  }
);
