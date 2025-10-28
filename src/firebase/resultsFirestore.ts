import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "./config";

export const saveUserResult = async (userId: string, score: number, total: number) => {
  try {
    const userRef = doc(db, "userResults", userId);
    const docSnap = await getDoc(userRef);

    if (docSnap.exists()) {
      const prevData = docSnap.data();
      await setDoc(userRef, {
        ...prevData,
        totalQuizzes: (prevData.totalQuizzes || 0) + 1,
        totalCorrect: (prevData.totalCorrect || 0) + score,
        totalQuestions: (prevData.totalQuestions || 0) + total,
        lastScore: score,
      });
    } else {
      await setDoc(userRef, {
        userId,
        totalQuizzes: 1,
        totalCorrect: score,
        totalQuestions: total,
        lastScore: score,
      });
    }

    console.log("✅ Result saved to Firestore!");
  } catch (error) {
    console.error("❌ Error saving user result:", error);
  }
};

export const fetchUserResult = async (userId: string) => {
  try {
    const userRef = doc(db, "userResults", userId);
    const docSnap = await getDoc(userRef);
    return docSnap.exists() ? docSnap.data() : null;
  } catch (error) {
    console.error("❌ Error fetching results:", error);
    return null;
  }
};
