import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import "./styles/index.scss";

// Create a root and use it to render the application
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

