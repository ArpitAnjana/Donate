// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLrlit3H-VLUW51c4k8FzDLqOKSc-gcWA",
  authDomain: "fir-auth-6faf7.firebaseapp.com",
  projectId: "fir-auth-6faf7",
  storageBucket: "fir-auth-6faf7.appspot.com",
  messagingSenderId: "622687242767",
  appId: "1:622687242767:web:11d0c53a4698c212bdf17a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
