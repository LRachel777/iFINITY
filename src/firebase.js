import {initializeApp} from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyAFaFEyxQru1TQXoP0b8uOCs2fumesFFg8",
    authDomain: "ifinity-d19e7.firebaseapp.com",
    projectId: "ifinity-d19e7",
    storageBucket: "ifinity-d19e7.appspot.com",
    messagingSenderId: "363873431854",
    appId: "1:363873431854:web:96c1dabc460d972ac2cabf"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);
  export const db = getFirestore(app);
  export default app
