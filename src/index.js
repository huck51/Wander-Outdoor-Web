import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SignUp from './Containers/signUp';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render((
  <BrowserRouter>
    <SignUp />
  </BrowserRouter>
), document.getElementById('root'));
registerServiceWorker();
