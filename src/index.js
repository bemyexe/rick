import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { DataProvider } from './components';
import './index.css';

const root = document.getElementById('root');

if (!root) {
  throw new Error('root not found');
}

const container = ReactDOM.createRoot(root);

container.render(
  <React.StrictMode>
    <DataProvider>
      <App />
    </DataProvider>
  </React.StrictMode>
);
