/* eslint-env node, browser */

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
// import * as reducers from './Reducers/TBD'; // Change this when file created
import './index.css';
import App from './App';
import MegaProvider from './Components/megaProvider';
import registerServiceWorker from './registerServiceWorker';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  (
    <BrowserRouter>
      <MegaProvider>
        <App />
      </MegaProvider>
    </BrowserRouter>
  ), document.getElementById('root'),
);
registerServiceWorker();
/*
ReactDOM.render(
  (
    <Provider store={createStoreWithMiddleware(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  ), document.getElementById('root'),
);
registerServiceWorker();
*/
