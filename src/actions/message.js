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

function saveMessage(message) {
  return function (dispatch, getState, ws) {
    dispatch(newMessage(message));

    ws.send(message);
  };
}


export {
  saveMessage,
  setMessages,
};
