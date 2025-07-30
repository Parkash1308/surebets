import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'; // Correctly imports the App component
import './index.css'; // Imports main CSS (if you have one, otherwise remove or leave empty)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
