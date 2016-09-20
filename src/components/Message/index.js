import React, { Component } from 'react';

class Message extends Component {
  render() {
    return(
      <div> {this.props.children.toString()} </div>
    );
  }
}

export default Message;
