import { collection, getDocs } from "firebase/firestore";
import { db } from "./config";

// Define the Question type
type Question = {
  id: string;
  question: string;
  options: string[];
  answer: string;
  category: string;
};

export const fetchQuestions = async (): Promise<Question[]> => {
  console.log("Connecting to Firestore..."); // ✅ Step 1: connection test
  try {
    const snapshot = await getDocs(collection(db, "questions"));
    const questions = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as Question[];
    console.log("Fetched questions:", questions); // ✅ Step 2: data log
    return questions;
  } catch (error) {
    console.error("❌ Error fetching questions:", error);
    return [];
  }
};