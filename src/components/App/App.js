import React, { Component } from 'react';

import HistoryList from '../HistoryList';
import ComposeForm from '../ComposeForm';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="app_header">
          <img src={logo} className="app_logo" alt="logo" />
        </div>

        <HistoryList />

        <ComposeForm />
      </div>
    );
  }
}

export default App;
