// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import dotenv from "dotenv";
// dotenv.config();
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  // apiKey: process.env.API_KEY,
  // authDomain: process.env.AUTH_DOMAIN,
  // projectId: process.env.PROJECT_ID,
  // storageBucket: process.env.STORAGE_BUKET,
  // messagingSenderId: process.env.MESSAGING_SENDER_ID,
  // appId: process.env.APP_ID,
  // measurementId: process.envMEASUREMENT_ID,
  apiKey: "AIzaSyDK7w2cjk-NWkN7C2OAuScipe8AxyC0Ei8",
  authDomain: "shoe-shop-8d586.firebaseapp.com",
  projectId: "shoe-shop-8d586",
  storageBucket: "shoe-shop-8d586.appspot.com",
  messagingSenderId: "641960018941",
  appId: "1:641960018941:web:7e0f41a18f581df9bb4f94",
  measurementId: "G-CEKN8H261T",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
