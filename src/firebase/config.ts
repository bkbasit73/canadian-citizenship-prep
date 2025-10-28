// src/firebase/config.ts
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your Firebase project settings:
const firebaseConfig = {
  apiKey: "AIzaSyC1WBeF6iQlDVvx4pquovzUdoWmB9PJDQo",
  authDomain: "canadian-citizenship-pre-8569c.firebaseapp.com",
  projectId: "canadian-citizenship-pre-8569c",
  storageBucket: "canadian-citizenship-pre-8569c.firebasestorage.app",
  messagingSenderId: "577514564965",
  appId: "1:577514564965:web:dd03dffad9363e4029458c",
  measurementId: "G-JP7ETGSSKH"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Export Firestore database
export const db = getFirestore(app);