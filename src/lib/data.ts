import type { Question, StudyTopic, UserPerformance, QuestionCategory } from '@/lib/types';

export const mockQuestions: Question[] = [
  {
    id: 1,
    question: 'What are the two official languages of Canada?',
    options: ['English and French', 'English and Spanish', 'English and Mandarin', 'French and Inuktitut'],
    answer: 'English and French',
    category: 'Symbols',
    explanation: 'Canada has two official languages: English and French. All federal government services must be available in both languages.',
  },
  {
    id: 2,
    question: 'Who is Canada\'s Head of State?',
    options: ['The Prime Minister', 'The Governor General', 'The reigning Sovereign of the United Kingdom', 'The President'],
    answer: 'The reigning Sovereign of the United Kingdom',
    category: 'Government',
    explanation: 'As a constitutional monarchy, Canada’s Head of State is a hereditary Sovereign (Queen or King) who reigns in accordance with the Constitution.',
  },
  {
    id: 3,
    question: 'What is the highest honour that Canadians can receive?',
    options: ['The Order of Canada', 'The Victoria Cross', 'The Medal of Bravery', 'A Nobel Prize'],
    answer: 'The Victoria Cross',
    category: 'Symbols',
    explanation: 'The Victoria Cross is the highest military decoration awarded for valour "in the face of the enemy" to members of the armed forces of Commonwealth countries.',
  },
  {
    id: 4,
    question: 'In what year did Canada become a country?',
    options: ['1867', '1776', '1901', '1812'],
    answer: '1867',
    category: 'History',
    explanation: 'On July 1, 1867, the provinces of Canada, Nova Scotia, and New Brunswick were united into a federal state, the Dominion of Canada.',
  },
  {
    id: 5,
    question: 'Which of the following is a responsibility of Canadian citizenship?',
    options: ['To own a house', 'To vote in elections', 'To learn both official languages', 'To travel abroad'],
    answer: 'To vote in elections',
    category: 'Rights and Responsibilities',
    explanation: 'Voting in federal, provincial or territorial, and local elections is a key responsibility of every Canadian citizen.',
  },
  {
    id: 6,
    question: 'What ocean borders Canada to the west?',
    options: ['Atlantic Ocean', 'Arctic Ocean', 'Pacific Ocean', 'Indian Ocean'],
    answer: 'Pacific Ocean',
    category: 'Geography',
    explanation: 'The Pacific Ocean borders Canada to the west, the Atlantic Ocean to the east, and the Arctic Ocean to the north.',
  },
  {
    id: 7,
    question: 'What do the three levels of government in Canada have in common?',
    options: ['They are all led by the Prime Minister', 'They all pass laws, have an elected body, and a leader', 'They are all based in Ottawa', 'They all have the same number of members'],
    answer: 'They all pass laws, have an elected body, and a leader',
    category: 'Government',
    explanation: 'The federal, provincial/territorial, and municipal governments each have specific powers and responsibilities, but they share a similar structure of passing laws, having an elected body (like Parliament or a city council), and a leader (like a Prime Minister or Mayor).',
  },
  {
    id: 8,
    question: 'Who were the United Empire Loyalists?',
    options: ['Settlers from France', 'The first Aboriginal people in Canada', 'People who remained loyal to the British Crown during the American Revolution', 'The founders of the Hudson\'s Bay Company'],
    answer: 'People who remained loyal to the British Crown during the American Revolution',
    category: 'History',
    explanation: 'The United Empire Loyalists were American colonists who remained loyal to the British Crown and fled to British North America during and after the American Revolutionary War.',
  },
];

export const mockStudyTopics: StudyTopic[] = [
  {
    id: 'history-1',
    category: 'History',
    title: 'The First Peoples',
    content: 'Aboriginal peoples have lived in what is now Canada for thousands of years. They consist of First Nations, Inuit, and Métis. First Nations have a history rich with diverse cultures and traditions. The Inuit primarily inhabit the Arctic regions. The Métis are of mixed Aboriginal and European ancestry.'
  },
  {
    id: 'gov-1',
    category: 'Government',
    title: 'Canada\'s System of Government',
    content: 'Canada is a parliamentary democracy and a constitutional monarchy. This means we have a Parliament to make our laws and the Queen of Canada as our head of state. There are three levels of government: federal, provincial/territorial, and municipal.'
  },
  {
    id: 'rights-1',
    category: 'Rights and Responsibilities',
    title: 'The Canadian Charter of Rights and Freedoms',
    content: 'The Charter protects fundamental freedoms, democratic rights, mobility rights, legal rights, and equality rights for all Canadians. With these rights come responsibilities, such as obeying the law, serving on a jury, and voting in elections.'
  },
  {
    id: 'symbols-1',
    category: 'Symbols',
    title: 'The National Flag',
    content: 'The red and white Canadian flag with a single red maple leaf was first raised on February 15, 1965. The maple leaf has been a symbol of Canada since the 18th century. Red and white are Canada\'s official colors.'
  },
  {
    id: 'geo-1',
    category: 'Geography',
    title: 'The Regions of Canada',
    content: 'Canada is the second-largest country in the world and has five distinct regions: the Atlantic Provinces, Central Canada, the Prairie Provinces, the West Coast, and the Northern Territories. Each region has its own unique landscape and economy.'
  }
];

export const mockUserPerformance: UserPerformance = {
  userId: 'user123',
  totalCorrect: 65,
  totalAnswered: 100,
  categoryPerformance: {
    'History': { correct: 15, total: 25 },
    'Government': { correct: 10, total: 25 },
    'Geography': { correct: 20, total: 20 },
    'Symbols': { correct: 12, total: 15 },
    'Rights and Responsibilities': { correct: 8, total: 15 },
  },
};
