import React from 'react';

import './HistoryList.css';
import Message from '../Message';

function HistoryList({ messages = [] }) {
  return (
    <div className="history_list">
      {
        messages.map((message) => {
          return (
            <Message
              key={message.id}
              author={message.author}
              timestamp={message.timestamp}
              owner={message.owner}
            >
              { message.text }
            </Message>
          );
        })
      }
    </div>
  );
}

export default HistoryList;
