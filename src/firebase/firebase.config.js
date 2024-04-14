// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC37XYQpw1SYJgztprdokSSX56RbOWRJOM",
  authDomain: "b9a9-real-estate-aa792.firebaseapp.com",
  projectId: "b9a9-real-estate-aa792",
  storageBucket: "b9a9-real-estate-aa792.appspot.com",
  messagingSenderId: "688822280789",
  appId: "1:688822280789:web:c48db5368edba31e07aadc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;