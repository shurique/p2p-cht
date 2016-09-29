import * as actionTypes from '../constants/actionTypes';

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
  login,
  receiveMessage,
};
