import React, { Component, PropTypes } from 'react';

import './JoinForm.css';

const propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

class JoinForm extends Component {
  constructor(props) {
    super(props);

    this.state = { username: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state);

    this.setState({ username: '' });
  }

  handleUsernameChange(e) {
    this.setState({ username: e.target.value });
  }

  render() {
    return (
      <div className="jf_wrap">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="roomID">Room ID:</label>
            <input type="text" className="form-control" id="roomID" readOnly="readonly" />
          </div>

          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              className="form-control"
              id="username"
              onChange={this.handleUsernameChange}
            />
          </div>

          <button type="submit" className="btn btn-default">Connect</button>
        </form>
      </div>
    );
  }
}

JoinForm.propTypes = propTypes;

export default JoinForm;
