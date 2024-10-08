import '@assets/css/GlobalStyle.css';

import App from '@/App';

import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(<App />);

reportWebVitals();
