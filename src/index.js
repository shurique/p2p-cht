import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import 'bootstrap/dist/css/bootstrap.css';

import App from './components/App';
import Chat from './components/Chat';
import JoinForm from './components/JoinForm';

import configureStore from './stores/configureStore';

import './index.css';


const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={JoinForm} />
        <Route path="/chat" component={Chat} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
