// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQ5P-M-qe_pN2oQYSq0XA8Kcykm0LKHYM",
  authDomain: "job-portal-ca1a2.firebaseapp.com",
  projectId: "job-portal-ca1a2",
  storageBucket: "job-portal-ca1a2.firebasestorage.app",
  messagingSenderId: "212756271308",
  appId: "1:212756271308:web:3dfda10afce02f9ffb3269"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);