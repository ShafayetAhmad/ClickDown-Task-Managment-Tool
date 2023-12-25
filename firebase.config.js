// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAisw-S_Xz98tf3RYSWupWvuz-b8rIjo-k",
  authDomain: "cllickdown.firebaseapp.com",
  projectId: "cllickdown",
  storageBucket: "cllickdown.appspot.com",
  messagingSenderId: "666663319207",
  appId: "1:666663319207:web:c875e088f09d03abc64d82",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth;
