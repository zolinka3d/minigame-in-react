import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { FeedbackProvider } from './context/Feedback';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <FeedbackProvider>
      <App />
    </FeedbackProvider>
  </React.StrictMode>
);

