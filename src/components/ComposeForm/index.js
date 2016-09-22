import React from 'react';

import './ComposeForm.css';

class ComposeForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = { text: '' };
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('click click', this.state.text.trim());
  }

  handleTextChange(e) {
    this.setState({ text: e.target.innerText });
  }

  render() {
    return (
      <form className="compose_form clearfix"
            onSubmit={this.handleSubmit}>
        <div className="cf_input">
          <div className="form-control"
               contentEditable="true"
               onInput={this.handleTextChange}
               ></div>
        </div>
        <div className="cf_controls center-block">
          <button type="submit" className="btn btn-primary">Send</button>
        </div>
      </form>
    );
  }
}

export default ComposeForm;
