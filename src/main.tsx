import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { CartProvider } from './context/CartContext';
import { ServiceAvailabilityProvider } from './context/ServiceAvailabilityContext';
import './styles.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ServiceAvailabilityProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </ServiceAvailabilityProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
