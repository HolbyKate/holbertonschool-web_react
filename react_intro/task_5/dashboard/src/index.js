import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Replace with your main component import
import Notifications from './Notifications'; // Replace with correct component import

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="root-notifications">
      <Notifications />
      <App />
    </div>
  </React.StrictMode>
);