// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC3fXjvC5hdsKbeBheGHVBvjTtzhe5R6n0",
  authDomain: "bodaedwinykristal.firebaseapp.com",
  projectId: "bodaedwinykristal",
  storageBucket: "bodaedwinykristal.appspot.com",
  messagingSenderId: "681128528955",
  appId: "1:681128528955:web:78d3e9ea374b0658c4a01e",
  measurementId: "G-GMZERTCKEH"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { app, analytics, db, auth, storage };