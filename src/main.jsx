import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Fix: Correct import
import './index.css';
import App from './App.jsx';

const root = document.getElementById('root');

createRoot(root).render(
  <StrictMode>
    <BrowserRouter> {/* Fix: Use 'react-router-dom' instead of 'react-router' */}
      <App />
    </BrowserRouter>
  </StrictMode>
);
