// src/firebase/userResultsFirestore.ts
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "./config";
import Storage from "../utils/storageHelper";

// Fetch the current user's performance
export const fetchUserResult = async (userId: string) => {
  try {
    const userRef = doc(db, "userResults", userId);
    const docSnap = await getDoc(userRef);
    return docSnap.exists() ? docSnap.data() : null;
  } catch (error) {
    console.error("Error fetching results:", error);
    return null;
  }
};

// Save or update user results
export const saveUserResult = async (userId: string, score: number, total: number) => {
  try {
    const userRef = doc(db, "userResults", userId);
    const docSnap = await getDoc(userRef);
    const streakCount = parseInt((await Storage.getItem("streakCount")) || "0");

    if (docSnap.exists()) {
      const prev = docSnap.data();
      await setDoc(userRef, {
        ...prev,
        totalQuizzes: (prev.totalQuizzes || 0) + 1,
        totalCorrect: (prev.totalCorrect || 0) + score,
        totalQuestions: (prev.totalQuestions || 0) + total,
        lastScore: score,
        streakCount: streakCount,
      });
    } else {
      await setDoc(userRef, {
        userId,
        totalQuizzes: 1,
        totalCorrect: score,
        totalQuestions: total,
        lastScore: score,
        streakCount: streakCount,
      });
    }

    console.log("✅ User results updated successfully!");
  } catch (error) {
    console.error("Error saving results:", error);
  }
};