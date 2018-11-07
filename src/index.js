/* eslint-env node, browser */

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { StripeProvider } from 'react-stripe-elements';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  (
    <BrowserRouter>
      <StripeProvider apiKey="pk_test_6kVwvdGW58r0XdXjnI4i9ui4">
        <App />
      </StripeProvider>
    </BrowserRouter>
  ), document.getElementById('root'),
);
registerServiceWorker();
