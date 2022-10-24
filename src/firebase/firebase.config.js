// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCYGWeqM5dF2QtEeblrRMEriAoE3u1kJuA",
  authDomain: "dragon-news-d8d23.firebaseapp.com",
  projectId: "dragon-news-d8d23",
  storageBucket: "dragon-news-d8d23.appspot.com",
  messagingSenderId: "1253784526",
  appId: "1:1253784526:web:2c3a868884954a30ee099f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;