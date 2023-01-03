// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBph6H0ueFu5UKGluEqGeYVp616XRMfME0",
  authDomain: "crwn-clothing-db-298d5.firebaseapp.com",
  projectId: "crwn-clothing-db-298d5",
  storageBucket: "crwn-clothing-db-298d5.appspot.com",
  messagingSenderId: "391216004449",
  appId: "1:391216004449:web:92b9389641acf58e24d920",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => {
  return signInWithPopup(auth, provider);
};
