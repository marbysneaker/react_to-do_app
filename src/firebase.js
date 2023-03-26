// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbhvCJyHR_fEefUPjJrucNzAo2HMF9p7E",
  authDomain: "todo-app-aa550.firebaseapp.com",
  projectId: "todo-app-aa550",
  storageBucket: "todo-app-aa550.appspot.com",
  messagingSenderId: "996294598997",
  appId: "1:996294598997:web:4da93e78c663e2aba44fdc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);