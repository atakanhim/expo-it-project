// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUX0V561EjpOXVNKGPULQwOcRqt4qX8HI",
  authDomain: "it-expo-app.firebaseapp.com",
  projectId: "it-expo-app",
  storageBucket: "it-expo-app.appspot.com",
  messagingSenderId: "1080126022086",
  appId: "1:1080126022086:web:ed687e60e86343809412c7"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);