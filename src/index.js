import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, Redirect, browserHistory } from 'react-router';

import 'bootstrap/dist/css/bootstrap.css';

import App from './components/App';
import Chat from './components/Chat';
import JoinForm from './components/JoinForm';

import configureStore from './stores/configureStore';

import './index.css';


const store = configureStore();

function requireUsername(data) {
  return (nextState, replace) => {
    if (!data.getState().chat.username) {
      replace({
        pathname: '/join',
        state: { nextPathname: nextState.location.pathname },
      });
    }
  };
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Redirect from="/" to="join" />
      <Route path="/" component={App}>
        <Route path="/chat" component={Chat} onEnter={requireUsername(store)} />
        <Route path="/join" component={JoinForm} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
