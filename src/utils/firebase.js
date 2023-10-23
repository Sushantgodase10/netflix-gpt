// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDq-DLH1CdFOJC3PLStGJ5u5Tg7UeGY0Xk",
  authDomain: "netflixgpt-6fa57.firebaseapp.com",
  projectId: "netflixgpt-6fa57",
  storageBucket: "netflixgpt-6fa57.appspot.com",
  messagingSenderId: "346707522600",
  appId: "1:346707522600:web:29efb887c65e1f1d83311d",
  measurementId: "G-TZCMW0YCHB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();