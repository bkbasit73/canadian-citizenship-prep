// src/firebase/studyFirestore.ts
import { collection, getDocs } from "firebase/firestore";
import { db } from "./config";

// Define the StudyItem type
type StudyItem = {
  id: string;
  title: string;
  content: string;
  category: string;
};

export const fetchStudyMaterials = async (): Promise<StudyItem[]> => {
  try {
    const snapshot = await getDocs(collection(db, "studyMaterials"));
    const materials = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as StudyItem[];
    return materials;
  } catch (error) {
    console.error("❌ Error loading study materials:", error);
    return [];
  }
};