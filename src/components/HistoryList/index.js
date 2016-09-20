import React, { Component } from 'react';

import Message from '../Message';

class HistoryList extends Component {
  render() {
    let messages = this.props.data.map((message) => {
      return(
        <Message key={message.id} author={message.author}>
          {message.text}
        </Message>
      );
    });

    return(
      <div className="history_list">
        { messages }
      </div>
    );
  }
}

export default HistoryList;
