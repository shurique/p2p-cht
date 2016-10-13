// import uuid from 'node-uuid';

import * as actionTypes from '../constants/actionTypes';
import * as messageActions from './message';

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
  login,
  receiveMessage,
  enableUI,
  disableUI,
};
