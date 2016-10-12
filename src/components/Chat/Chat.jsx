import React from 'react';

import HistoryList from '../HistoryList';
import ComposeForm from '../ComposeForm';

import './Chat.css';

function Chat() {
  return (
    <div className="chat">
      <HistoryList />
      <ComposeForm />
    </div>
  );
}

export default Chat;
