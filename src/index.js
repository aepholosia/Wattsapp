// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDu1H0GkJn1nEHG2k2ncAXq3vp20ztDdiY",
  authDomain: "wattsapp-34e56.firebaseapp.com",
  projectId: "wattsapp-34e56",
  storageBucket: "wattsapp-34e56.appspot.com",
  messagingSenderId: "993603022763",
  appId: "1:993603022763:web:51635c05053022b5072cee",
  measurementId: "G-HTMJT0D0FJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log(app)