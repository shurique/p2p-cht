import React, { Component } from 'react';

import './ComposeForm.css';

class ComposeForm extends Component {
  render() {
    return(
      <div className="compose_form clearfix">
        <div className="cf_input">
          <div className="form-control" contentEditable="true"></div>
        </div>
        <div className="cf_controls center-block">
          <button type="submit" className="btn btn-primary">Send</button>
        </div>
      </div>
    );
  }
}

export default ComposeForm;
