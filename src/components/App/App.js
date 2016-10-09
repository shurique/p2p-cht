import React, { Component, PropTypes } from 'react';

import HistoryList from '../HistoryList';
import ComposeForm from '../ComposeForm';
import logo from './logo.svg';
import './App.css';

const propTypes = {
  onMount: PropTypes.func.isRequired,
};

class App extends Component {
  componentWillMount() {
    this.props.onMount();
  }

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

App.propTypes = propTypes;

export default App;
