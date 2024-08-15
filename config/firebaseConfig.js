// lib/firebaseClient.js

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "my-awesome-project-b0497.firebaseapp.com",
  databaseURL: "https://my-awesome-project-b0497-default-rtdb.asia-southeast1.firebasedatabase.app/",
  projectId: "my-awesome-project-b0497",
  storageBucket: "my-awesome-project-b0497.appspot.com",
  messagingSenderId: "133609502590",
  appId: "1:133609502590:web:e168f4aac832e8cec9652f",
  measurementId: "G-X23XL9SNCS"
};

// Initialize Firebase
let firebaseApp;
let analytics;
let db;
let database;

if (typeof window !== 'undefined') {
  firebaseApp = initializeApp(firebaseConfig);
  db = getFirestore(firebaseApp);
  analytics = getAnalytics(firebaseApp);
  database = getDatabase(firebaseApp);
}

export { firebaseApp, db, analytics, database };
