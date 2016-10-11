import uuid from 'node-uuid';

import * as actionTypes from '../constants/actionTypes';
import * as messageActions from './message';

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

function connectionCreated() {
  const username = `User_${uuid.v4().split('-')[0]}`;

  return (dispatch) => {
    dispatch(login({ username }));
    dispatch(messageActions.fetchMessages());
  };
}

export {
  wsConnect,
  login,
  receiveMessage,
  connectionCreated,
};
