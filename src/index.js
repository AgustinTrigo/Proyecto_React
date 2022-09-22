import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtTdOG7S7nnVfmlyOJCZ_nYduxjoGCCZk",
  authDomain: "reactjs-coderhouse-93103.firebaseapp.com",
  projectId: "reactjs-coderhouse-93103",
  storageBucket: "reactjs-coderhouse-93103.appspot.com",
  messagingSenderId: "528711750509",
  appId: "1:528711750509:web:fa118a3fed56083e3c8064"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

