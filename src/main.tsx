import React from "react";
import { initializeApp } from "firebase/app";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

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
initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
