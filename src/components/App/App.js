import React, { Component } from 'react';

import HistoryWrap from '../HistoryWrap';
import ComposeForm from '../ComposeForm';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="app_header">
          <img src={logo} className="app_logo" alt="logo" />
          <h4>Welcome to React</h4>
        </div>

        <HistoryWrap />

        <ComposeForm />
      </div>
    );
  }
}

export default App;
