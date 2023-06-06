import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8onkBqsZGmwRM4--paA5o3gitfFuhjO8",
  authDomain: "react-authentication-23111.firebaseapp.com",
  projectId: "react-authentication-23111",
  storageBucket: "react-authentication-23111.appspot.com",
  messagingSenderId: "24369925541",
  appId: "1:24369925541:web:4f59c915e83998ebf9ec4c",
  measurementId: "G-F2SSB7CBYX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth =getAuth(app);
export default app
