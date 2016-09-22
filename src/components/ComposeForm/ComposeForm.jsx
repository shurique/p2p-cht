import React, { Component, PropTypes } from 'react';

import './ComposeForm.css';

const propTypes = {
  onMessageSubmit: PropTypes.func.isRequired,
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
    const text = this.state.text.trim();
    if (!text) {
      return;
    }
    this.props.onMessageSubmit({ text });
    this.setState({ text: '' });
    this.htmlEl.innerText = '';
  }

  handleTextChange(e) {
    this.setState({ text: e.target.innerText });
  }

  render() {
    return (
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
          />
        </div>
        <div className="cf_controls center-block">
          <button type="submit" className="btn btn-primary">Send</button>
        </div>
      </form>
    );
  }
}

ComposeForm.propTypes = propTypes;

export default ComposeForm;
