/* eslint-env node, browser */

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Auth from './auth';

const auth = new Auth();

ReactDOM.render(
  (
    <BrowserRouter>
        <App auth={auth} />
    </BrowserRouter>
  ), document.getElementById('root'),
);
registerServiceWorker();
