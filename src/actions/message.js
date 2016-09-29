import uuid from 'node-uuid';

import * as actionTypes from '../constants/actionTypes';

function setMessages(messages) {
  return {
    type: actionTypes.SET_MESSAGES,
    messages,
  };
}

function newMessage(message) {
  return {
    type: actionTypes.NEW_MESSAGE,
    message,
  };
}

function fillMessage(message) {
  const timestamp = Date.now();

  return Object.assign({}, message, {
    id: `${timestamp}_${uuid.v4().split('-')[0]}`,
    timestamp,
  });
}

function setOwner(message, username) {
  return Object.assign({}, message, {
    owner: message.author === username,
  });
}


function saveMessage(message) {
  return (dispatch, getState, ws) => {
    const msg = fillMessage(message);

    dispatch(newMessage(setOwner(msg, getState().chat.username)));
    ws.send(msg);
  };
}


export {
  saveMessage,
  setMessages,
};
