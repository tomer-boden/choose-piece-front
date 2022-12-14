// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBDZ1JY6lKupg_NiC_jU5xyeqf02VdRVjI",
  authDomain: "choosepiecedb.firebaseapp.com",
  projectId: "choosepiecedb",
  storageBucket: "choosepiecedb.appspot.com",
  messagingSenderId: "660809929125",
  appId: "1:660809929125:web:841ad08c4c19f4ee67984c",
  measurementId: "G-TRQJ3BNB96",
};

if (!firebase.apps.length) {
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
}
export const auth = firebase.auth();
export const firestore = firebase.firestore();
// Initialize Firebase
