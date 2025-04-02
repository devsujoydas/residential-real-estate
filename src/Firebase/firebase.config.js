// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3RDuU6RZQ4m6eQ6R4PAZpPcs0dwV1weY",
  authDomain: "react-dragon-news-auth-c52ed.firebaseapp.com",
  projectId: "react-dragon-news-auth-c52ed",
  storageBucket: "react-dragon-news-auth-c52ed.firebasestorage.app",
  messagingSenderId: "791466974323",
  appId: "1:791466974323:web:ca4319d0ff660e04efde06"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;