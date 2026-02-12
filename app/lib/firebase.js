// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB0wlN8c8FbPpMMX9VmuiiuHHKzEwsbZCs",
  authDomain: "ai-notes-aca55.firebaseapp.com",
  projectId: "ai-notes-aca55",
  storageBucket: "ai-notes-aca55.firebasestorage.app",
  messagingSenderId: "765628456253",
  appId: "1:765628456253:web:be7bfb0063f05d23f63954",
  measurementId: "G-SXV1JJ0NZN"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);