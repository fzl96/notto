import { initializeApp } from "firebase/app";
import { enableIndexedDbPersistence, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCUvvTsh7WMMsC-JjlUTUZnl1RXSNJaBp4",
  authDomain: "notto-ead87.firebaseapp.com",
  projectId: "notto-ead87",
  storageBucket: "notto-ead87.appspot.com",
  messagingSenderId: "548144945450",
  appId: "1:548144945450:web:f58b3a99eb0d49ce3c6653"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export { db }; 