import React, { Component } from 'react';

import './HistoryList.css';
import Message from '../Message';

class HistoryList extends Component {
  render() {
    let messages = this.props.data.map((message) => {
      return(
        <Message key={message.id}
                 author={message.author}
                 timestamp={message.timestamp}
                 owner={message.owner}>
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
