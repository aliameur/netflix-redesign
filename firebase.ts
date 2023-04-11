// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBTKxNrKUdDy0u8FNjCzgHid25Iw2pzrMw",
  authDomain: "netflix-redesign-b82a2.firebaseapp.com",
  projectId: "netflix-redesign-b82a2",
  storageBucket: "netflix-redesign-b82a2.appspot.com",
  messagingSenderId: "351244234358",
  appId: "1:351244234358:web:e86f1d5ca07420209fb957"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }