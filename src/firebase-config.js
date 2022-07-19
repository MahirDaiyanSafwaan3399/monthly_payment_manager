// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDno-6BnofbDStq-sj6C9rhd4DZ8HqprPE",
  authDomain: "monthly-tuition-fee.firebaseapp.com",
  projectId: "monthly-tuition-fee",
  storageBucket: "monthly-tuition-fee.appspot.com",
  messagingSenderId: "84826302668",
  appId: "1:84826302668:web:e1dcfdde9e18a566303a69",
  measurementId: "G-BP806MHY0H"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

