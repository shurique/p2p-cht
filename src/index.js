import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import uuid from 'node-uuid';

import 'bootstrap/dist/css/bootstrap.css';

import App from './components/App/App';
import configureStore from './stores/configureStore';
import * as actions from './actions';
import './index.css';

const store = configureStore();

const username = `User_${uuid.v4().split('-')[0]}`;
store.dispatch(
  actions.login({
    username,
  })
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
