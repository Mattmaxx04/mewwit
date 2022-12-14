// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCNiQBHsAd7d1bYeIaCozKD4BDSrGoY2k4",
  authDomain: "mewwit-bd248.firebaseapp.com",
  projectId: "mewwit-bd248",
  storageBucket: "mewwit-bd248.appspot.com",
  messagingSenderId: "536708233133",
  appId: "1:536708233133:web:16f192bcb9589c81d39324"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


/*auth.languageCode = 'it';*/
export {app}