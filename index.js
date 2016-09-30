import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';

//CSS
import './style/reset.css';
import './style/style.css';

import { Provider } from 'react-redux';
import store from './src/store';

import Layout from './src/Layout/Layout';

const app = document.getElementById('app');
ReactDOM.render(
  <Provider store={store}>
    <Layout />
  </Provider>
  , app);
