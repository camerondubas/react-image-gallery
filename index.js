import React from 'react';
import ReactDOM from 'react-dom';

//CSS
import './style/reset.css';
import './style/style.css';

import { Provider } from 'react-redux';
import store from './src/store';

import App from './src/app/App';

const app = document.getElementById('app');
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , app);
