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


export {
  newMessage,
  setMessages,
};
