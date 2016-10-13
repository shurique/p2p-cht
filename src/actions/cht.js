// import uuid from 'node-uuid';
import { browserHistory } from 'react-router';

import * as actionTypes from '../constants/actionTypes';
import * as messageActions from './message';

function login(data) {
  return {
    type: actionTypes.LOGIN,
    data,
  };
}

function join(data) {
  return (dispatch, getState) => {
    let prJoin = new Promise((resolve, reject) => {
      function anyUsername() {
        if (getState().chat.username) {
          resolve();
        }
        if (getState().uiDisabled) {
          reject();
        }
      }

      setTimeout(anyUsername, 500);
    });

    dispatch(login(data));
    prJoin.then(() => {
      browserHistory.push('/chat');
    });
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

function enableUI() {
  return {
    type: actionTypes.ENABLE_UI,
  };
}

function disableUI() {
  return {
    type: actionTypes.DISABLE_UI,
  };
}


export {
  join,
  receiveMessage,
  enableUI,
  disableUI,
};
