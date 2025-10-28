// src/firebase/dailyChallengeFirestore.ts
import { collection, getDocs, doc, setDoc } from "firebase/firestore";
import { db } from "./config";

export const fetchDailyQuestions = async (limitCount: number = 10) => {
  try {
    const snapshot = await getDocs(collection(db, "questions"));
    const allQuestions = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    // Shuffle the questions randomly
    const shuffled = allQuestions.sort(() => 0.5 - Math.random());

    // Pick only 10
    return shuffled.slice(0, limitCount);
  } catch (error) {
    console.error("Error fetching daily questions:", error);
    return [];
  }
};

// Save user score
export const saveDailyChallengeResult = async (userId: string, score: number, total: number) => {
  try {
    const today = new Date().toISOString().split("T")[0]; // YYYY-MM-DD
    await setDoc(doc(db, "dailyChallengeResults", `${userId}_${today}`), {
      userId,
      date: today,
      score,
      total,
    });
    console.log("✅ Daily challenge result saved!");
  } catch (error) {
    console.error("Error saving daily challenge result:", error);
  }
};
