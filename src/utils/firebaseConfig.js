// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGKuhWbTcpVJWIGqiDA3JXVYkKUxXk0FE",
  authDomain: "fallen-cca8e.firebaseapp.com",
  projectId: "fallen-cca8e",
  storageBucket: "fallen-cca8e.appspot.com",
  messagingSenderId: "162562979263",
  appId: "1:162562979263:web:e7a9dd16afd57b1f929d0a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;