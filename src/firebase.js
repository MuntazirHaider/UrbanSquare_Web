// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "bookify-f5ade.firebaseapp.com",
  projectId: "bookify-f5ade",
  storageBucket: "bookify-f5ade.appspot.com",
  messagingSenderId: "826506337255",
  appId: "1:826506337255:web:8271e332011abb51413b42"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);