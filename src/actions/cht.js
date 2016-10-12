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

function receiveMessage(wsMessage) {
  return (dispatch) => {
    switch (wsMessage.type) {
      case actionTypes.NEW_MESSAGE: {
        dispatch(messageActions.setMessage(wsMessage.data.message));
        break;
      }
      case actionTypes.FETCH_MESSAGES: {
        dispatch(messageActions.provideMessages());
        break;
      }
      case actionTypes.PROVIDE_MESSAGES: {
        dispatch(messageActions.applyHistory(wsMessage.data));
        break;
      }
      default:
        return {};
    }

    return {};
  };
}

function connectionCreated() {
  // const username = `User_${uuid.v4().split('-')[0]}`;

  return (dispatch, getState) => {
    console.log('created');
    // if (!getState().chat.username) {
    //   dispatch(login({ username }));
    // }

    // dispatch(messageActions.fetchMessages());
  };
}

function connectionClosed() {
  return {
    type: actionTypes.CONNECTION_CLOSED,
  };
}

function connectionError() {
  return {
    type: actionTypes.CONNECTION_ERROR,
  };
}

export {
  wsConnect,
  login,
  receiveMessage,
  connectionCreated,
  connectionClosed,
  connectionError,
};
