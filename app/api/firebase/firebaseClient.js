// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBiu_dX7NUaFNWhJ1XEuPudXDguLgI7dQ4",
  authDomain: "store-8fac2.firebaseapp.com",
  projectId: "store-8fac2",
  storageBucket: "store-8fac2.appspot.com",
  messagingSenderId: "772868189032",
  appId: "1:772868189032:web:6592f25071706bedbe44dd",
  measurementId: "G-R5FNVQD07T"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const db = getFirestore(app);