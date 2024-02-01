import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.css';
import App from './App';
import { TransactionsProvider } from './services/context/budget/transactionsContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TransactionsProvider>
      <App />
    </TransactionsProvider>
  </React.StrictMode>,
);
