// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCU_5cV88i41AkmIiOrw0LF9MCugOu0uxE",
  authDomain: "netflixgpt-e6617.firebaseapp.com",
  projectId: "netflixgpt-e6617",
  storageBucket: "netflixgpt-e6617.appspot.com",
  messagingSenderId: "582322046183",
  appId: "1:582322046183:web:64bf404255f8995f444e42",
  measurementId: "G-RJ7TKJXEZJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();

