// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBszS75OY-JbPnS5rshN3t4AOYsJLKbUOQ",
  authDomain: "firstproject-b5935.firebaseapp.com",
  projectId: "firstproject-b5935",
  storageBucket: "firstproject-b5935.appspot.com",
  messagingSenderId: "33062895848",
  appId: "1:33062895848:web:fc71770c28bcc7ce50095d",
  measurementId: "G-2WE63DT94Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);