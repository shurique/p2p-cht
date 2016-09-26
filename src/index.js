import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.css';

import App from './components/App/App';
import configureStore from './stores/configureStore';
import * as actions from './actions';
import './index.css';

const data = [
  {
    id: 1,
    author: 'User1',
    text: 'Hello from User1',
    timestamp: 1474399514615,
    owner: false,
  },
  {
    id: 2,
    author: 'User2',
    text: 'Hello from User2 kasdjlksdj f;lajsd fkljasd fadf kldjasf kljasdklfj adklsjf kljasdfkl jadklsfj dfkldjas fkljasdfkl jasdklfj dasf kljasdlfk jasfkl jadf kldjsf lahsgw[eit pwrjt90u 40gjkefgj -=21rg fjgkljdf;lg dsfkjg lsjdflg jd;flsg] Hello from User2 kasdjlksdj f;lajsd fkljasd fadf kldjasf kljasdklfj adklsjf kljasdfkl jadklsfj dfkldjas fkljasdfkl jasdklfj dasf kljasdlfk jasfkl jadf kldjsf lahsgw[eit pwrjt90u 40gjkefgj -=21rg fjgkljdf;lg dsfkjg lsjdflg jd;flsg]',
    timestamp: 1474399514715,
    owner: false,
  },
  {
    id: 3,
    author: 'User3',
    text: 'Hello from User3',
    timestamp: 1474399514815,
    owner: true,
  },
  {
    id: 4,
    author: 'User3',
    text: 'Hello from User3',
    timestamp: 1474399514815,
    owner: true,
  },
  {
    id: 5,
    author: 'User3',
    text: 'Hello from User3',
    timestamp: 1474399514815,
    owner: true,
  },
  {
    id: 6,
    author: 'User3',
    text: 'Hello from User3',
    timestamp: 1474399514815,
    owner: true,
  },
  {
    id: 7,
    author: 'User3',
    text: 'Hello from User3',
    timestamp: 1474399514815,
    owner: true,
  },
  {
    id: 8,
    author: 'User3',
    text: 'Hello from User3',
    timestamp: 1474399514815,
    owner: true,
  },

];

const store = configureStore();

store.dispatch(actions.setMessages(data));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
