import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB3El_2rXCbP0uhSiM5GYmapm0LWTz7VP8",
  authDomain: "checkoutph-c5d01.firebaseapp.com",
  projectId: "checkoutph-c5d01",
  storageBucket: "checkoutph-c5d01.appspot.com",
  messagingSenderId: "157620146254",
  appId: "1:157620146254:web:dddc2bb388e5c3df69731f",
  measurementId: "G-YNQ6BCEFXP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
