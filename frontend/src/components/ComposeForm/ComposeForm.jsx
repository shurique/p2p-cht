import React, { Component, PropTypes } from 'react';

import './ComposeForm.css';

const propTypes = {
  author: PropTypes.string.isRequired,
  onMessageSubmit: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
};

class ComposeForm extends Component {
  constructor(props) {
    super(props);

    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = { text: '' };
    this.htmlEl = null;
  }

  handleSubmit(e) {
    e.preventDefault();
    const message = {
      text: this.state.text.trim(),
      author: this.props.author,
    };

    if (!message.text) {
      return;
    }
    this.props.onMessageSubmit(message);
    this.setState({ text: '' });
    this.htmlEl.innerText = '';
  }

  handleTextChange(e) {
    const { disabled } = this.props;

    if (!disabled && (e.ctrlKey && e.keyCode === 13)) {
      // Ctrl + Enter
      this.handleSubmit(e);
    } else {
      this.setState({ text: e.target.innerText });
    }
  }

  render() {
    const { disabled } = this.props;

    return (
      <div className="cf_wrap">
        <form
          className="compose_form clearfix"
          onSubmit={this.handleSubmit}
        >
          <div className="cf_input">
            <div
              ref={(e) => { this.htmlEl = e; }}
              className="form-control"
              contentEditable="true"
              onInput={this.handleTextChange}
              onKeyDown={this.handleTextChange}
            />
          </div>
          <div className="cf_controls center-block">
            <button
              type="submit"
              className="btn btn-primary"
              disabled={disabled}
            >
              Send
            </button>
          </div>
        </form>
      </div>
    );
  }
}

ComposeForm.propTypes = propTypes;

export default ComposeForm;
