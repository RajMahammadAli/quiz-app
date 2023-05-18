import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDfDGZKf28AwtQJSeqDKiYftQ7rljtupPc",
  authDomain: "quiz-app-e9a48.firebaseapp.com",
  projectId: "quiz-app-e9a48",
  storageBucket: "quiz-app-e9a48.appspot.com",
  messagingSenderId: "424979787842",
  appId: "1:424979787842:web:380af51e39e384355bbddb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
