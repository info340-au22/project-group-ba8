import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App.js';
//import css file here! 
import './style.css';

//render the App component here!
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    

    
  </React.StrictMode>
);