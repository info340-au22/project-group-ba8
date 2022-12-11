import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App.js';
import { BrowserRouter } from 'react-router-dom';

// import bootstrap js
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

//import css file here! 
import './style.css';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA74qCTVPfbsQu6nk2B43Bl5Tf882OsMPQ",
  authDomain: "event-map-group-ba8.firebaseapp.com",
  projectId: "event-map-group-ba8",
  storageBucket: "event-map-group-ba8.appspot.com",
  messagingSenderId: "150146764692",
  appId: "1:150146764692:web:baea02dd608a5edf3dc981"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);







//render the App component here!
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);