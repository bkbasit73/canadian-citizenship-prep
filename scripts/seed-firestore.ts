// To run this script, you need to have ts-node installed:
// npm install -g ts-node
// Then run: ts-node --esm scripts/seed-firestore.ts

import { initializeApp } from 'firebase/app';
import { getFirestore, collection, writeBatch } from 'firebase/firestore';
import { mockQuestions, mockStudyTopics } from '../src/lib/data';
import { firebaseConfig } from '../src/firebase/config';

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

async function seedQuestions() {
  const questionsCollection = collection(db, 'questions');
  const batch = writeBatch(db);

  mockQuestions.forEach((question) => {
    const docRef = collection(questionsCollection).doc(String(question.id));
    batch.set(docRef, question);
  });

  try {
    await batch.commit();
    console.log(`Successfully seeded ${mockQuestions.length} questions.`);
  } catch (error) {
    console.error('Error seeding questions:', error);
  }
}

async function seedStudyTopics() {
  const studyTopicsCollection = collection(db, 'study_topics');
  const batch = writeBatch(db);

  mockStudyTopics.forEach((topic) => {
    const docRef = collection(studyTopicsCollection).doc(topic.id);
    batch.set(docRef, topic);
  });

  try {
    await batch.commit();
    console.log(`Successfully seeded ${mockStudyTopics.length} study topics.`);
  } catch (error) {
    console.error('Error seeding study topics:', error);
  }
}

async function main() {
  console.log('Starting Firestore seeding process...');
  await seedQuestions();
  await seedStudyTopics();
  console.log('Firestore seeding complete.');
  // The script will hang, so we need to exit explicitly.
  process.exit(0);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
