// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbc_AG1CacDKQ0GTU8oyH1n9fMd7IJ10M",
  authDomain: "manifesto-to-be-worn.firebaseapp.com",
  projectId: "manifesto-to-be-worn",
  storageBucket: "manifesto-to-be-worn.firebasestorage.app",
  messagingSenderId: "337182261950",
  appId: "1:337182261950:web:36bdfba46012fc9e3094ef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export {db ,auth}

// export default auth;