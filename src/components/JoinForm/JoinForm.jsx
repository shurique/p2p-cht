import React, { Component, PropTypes } from 'react';

import './JoinForm.css';

const propTypes = {
  onSubmit: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
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
    const data = {
      username: this.state.username,
    };

    if (!data.username) {
      return;
    }

    this.props.onSubmit(data);
    // Clear form
    this.setState({ username: '' });
  }

  handleUsernameChange(e) {
    this.setState({ username: e.target.value });
  }

  render() {
    const { disabled } = this.props;

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
              disabled={disabled}
            />
          </div>

          <button
            type="submit"
            className="btn btn-default"
            disabled={disabled}
          >
            Connect
          </button>
        </form>
      </div>
    );
  }
}

JoinForm.propTypes = propTypes;

export default JoinForm;
