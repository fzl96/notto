// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { enableIndexedDbPersistence } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBbOSwCNrdc5HFJRXteifz9PsIPjyol8po",
  authDomain: "notebook-app-be5fa.firebaseapp.com",
  databaseURL: "https://notebook-app-be5fa-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "notebook-app-be5fa",
  storageBucket: "notebook-app-be5fa.appspot.com",
  messagingSenderId: "143853238727",
  appId: "1:143853238727:web:325226b9435bcbcc8441e2",
  measurementId: "G-WV7TBT30BM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
enableIndexedDbPersistence(db)
  .catch((err) => {
      if (err.code == 'failed-precondition') {
          // Multiple tabs open, persistence can only be enabled
          // in one tab at a a time.
          // ...
      } else if (err.code == 'unimplemented') {
          // The current browser does not support all of the
          // features required to enable persistence
          // ...
      }
  });


export { db };