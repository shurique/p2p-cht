import { connect } from 'react-redux';

import HistoryList from './HistoryList';

function setOwner(message, username) {
  return Object.assign({}, message, {
    owner: message.author === username,
  });
}

function mapStateToProps(state) {
  const { username } = state.chat;
  const { messages } = state.history;

  return {
    messages: messages.map(message => setOwner(message, username)),
  };
}

export default connect(mapStateToProps)(HistoryList);
