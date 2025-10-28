import { 
  getFirestore, 
  doc, 
  setDoc, 
  getDoc, 
  updateDoc, 
  arrayUnion, 
  onSnapshot 
} from "firebase/firestore";
import { app } from "./config";

const db = getFirestore(app);

// Save user progress
export const saveUserProgress = async (userId: string, streak: number, badge: string) => {
  try {
    const userRef = doc(db, "users", userId);
    await setDoc(
      userRef,
      {
        streakCount: streak,
        badges: arrayUnion(badge),
        lastUpdated: new Date(),
      },
      { merge: true }
    );
  } catch (error) {
    console.error("Error saving user progress:", error);
  }
};

// Fetch once (for non-live screens)
export const fetchUserData = async (userId: string) => {
  try {
    const docRef = doc(db, "users", userId);
    const snap = await getDoc(docRef);
    if (snap.exists()) return snap.data();
    return null;
  } catch (error) {
    console.error("Error fetching user data:", error);
    return null;
  }
};

// 🟢 NEW: Listen for live changes in Firestore
export const listenToUserData = (userId: string, callback: (data: any) => void) => {
  const docRef = doc(db, "users", userId);
  return onSnapshot(docRef, (docSnap) => {
    if (docSnap.exists()) {
      callback(docSnap.data());
    } else {
      console.log("No user data found");
    }
  });
};