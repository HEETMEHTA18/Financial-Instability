import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// Add this debug log
console.log('Starting application...');

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
