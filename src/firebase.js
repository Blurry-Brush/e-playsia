// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0UgzSPDp8oaanWRRP7lE3vLCnYzicCgE",
  authDomain: "e-plasia.firebaseapp.com",
  projectId: "e-plasia",
  storageBucket: "e-plasia.appspot.com",
  messagingSenderId: "1027813087874",
  appId: "1:1027813087874:web:aa987744f3804b345df29b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);