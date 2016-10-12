import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

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
          <Link to="/chat">Chat</Link>
        </div>
        { this.props.children }
      </div>
    );
  }
}

App.propTypes = propTypes;

export default App;
