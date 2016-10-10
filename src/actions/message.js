import uuid from 'node-uuid';

import * as actionTypes from '../constants/actionTypes';


function fillMessage(message) {
  const timestamp = Date.now();

  return Object.assign({}, message, {
    id: `${timestamp}_${uuid.v4().split('-')[0]}`,
    timestamp,
  });
}

// ---------------------------------

function setMessages(messages) {
  return {
    type: actionTypes.SET_MESSAGES,
    messages,
  };
}

function setMessage(message) {
  return {
    type: actionTypes.SET_MESSAGE,
    message,
  };
}

function newMessage(message) {
  return {
    type: actionTypes.NEW_MESSAGE,
    message: fillMessage(message),
  };
}

export {
  newMessage,
  setMessages,
  setMessage,
};
