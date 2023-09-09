// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA62qhvgrBntkEk_aSVBmEcksLrwVD9C-w",
    authDomain: "expense-tracker-dcd4d.firebaseapp.com",
    projectId: "expense-tracker-dcd4d",
    storageBucket: "expense-tracker-dcd4d.appspot.com",
    messagingSenderId: "913162032500",
    appId: "1:913162032500:web:974e506ac9b8409fee8821"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider();
