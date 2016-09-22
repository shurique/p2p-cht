import React, { PropTypes } from 'react';

import './HistoryList.css';
import Message from '../Message';

const propTypes = {
  messages: PropTypes.array.isRequired,
};

function HistoryList({ messages = [] }) {
  return (
    <div className="history_list">
      { messages.map(message => (
        <Message
          key={message.id}
          author={message.author}
          timestamp={message.timestamp}
          owner={message.owner}
        >
          { message.text }
        </Message>
        ))}
    </div>
  );
}

HistoryList.propTypes = propTypes;

export default HistoryList;
