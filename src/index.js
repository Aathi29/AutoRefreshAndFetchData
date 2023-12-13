
// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const initialIndex = parseInt(localStorage.getItem('currentIndex')) || 0;

ReactDOM.render(
  <React.StrictMode>
    <App initialIndex={initialIndex} />
  </React.StrictMode>,
  document.getElementById('root')
);
