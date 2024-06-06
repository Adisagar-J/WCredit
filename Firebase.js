// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA0yb-Ps3nnJI03nqbS0hE7XaveCe0h8gQ",
  authDomain: "wcredit-database.firebaseapp.com",
  projectId: "wcredit-database",
  storageBucket: "wcredit-database.appspot.com",
  messagingSenderId: "788821373288",
  appId: "1:788821373288:web:2ddbcadb134165f0c5a6dd",
  measurementId: "G-64M6Z15NLP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);