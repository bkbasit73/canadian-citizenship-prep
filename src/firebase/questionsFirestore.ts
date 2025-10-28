import { collection, getDocs } from "firebase/firestore";
import { db } from "./config";

// Fetch all quiz questions
export const fetchQuestions = async () => {
  try {
    const snapshot = await getDocs(collection(db, "questions"));
    const questions = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return questions;
  } catch (error) {
    console.error("Error fetching questions:", error);
    return [];
  }
};
