// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {GoogleAuthProvider, getAuth} from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyByIwMRtfIBJiaLKC6J6LAnyAwXhTfBSDA",
  authDomain: "mern-1-a379c.firebaseapp.com",
  projectId: "mern-1-a379c",
  storageBucket: "mern-1-a379c.appspot.com",
  messagingSenderId: "509387149334",
  appId: "1:509387149334:web:cdb3070260ddff00386537"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider() 
export default firebaseConfig