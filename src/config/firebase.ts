// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZ--V37RHbCHVMM2o3czsTDXEL8JCjD9Q",
  authDomain: "quiz-v3-c0a2d.firebaseapp.com",
  projectId: "quiz-v3-c0a2d",
  storageBucket: "quiz-v3-c0a2d.appspot.com",
  messagingSenderId: "879961335038",
  appId: "1:879961335038:web:98e1c9c8435128566fb1af",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
