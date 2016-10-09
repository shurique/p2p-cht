import * as actionTypes from '../constants/actionTypes';

function wsConnect() {
  return {
    type: actionTypes.WS_CONNECT,
  };
}

function login(data) {
  return {
    type: actionTypes.LOGIN,
    data,
  };
}

function receiveMessage(data) {
  return {
    type: actionTypes.RECEIVE_WS_MESSAGE,
    data,
  };
}

export {
  wsConnect,
  login,
  receiveMessage,
};
