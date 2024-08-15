// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import{getDatabase} from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCbUp9bVX5qMqP7DabC3pLf0FTJBZljurI",
  authDomain: "my-awesome-project-b0497.firebaseapp.com",
  databaseURL:"https://my-awesome-project-b0497-default-rtdb.asia-southeast1.firebasedatabase.app/",
  projectId: "my-awesome-project-b0497",
  storageBucket: "my-awesome-project-b0497.appspot.com",
  messagingSenderId: "133609502590",
  appId: "1:133609502590:web:e168f4aac832e8cec9652f",
  measurementId: "G-X23XL9SNCS"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);
const analytics = getAnalytics(app);

const database=getDatabase(app);
export {database}

