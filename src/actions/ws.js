import * as actionTypes from '../constants/actionTypes';
import * as chatActions from './cht';

function wsConnect() {
  return {
    type: actionTypes.WS_CONNECT,
  };
}

function created() {
  return {
    type: actionTypes.CONNECTION_CREATED,
  };
}

function closed() {
  return {
    type: actionTypes.CONNECTION_CLOSED,
  };
}

function error() {
  return {
    type: actionTypes.CONNECTION_ERROR,
  };
}

function connectionCreated() {
  return (dispatch) => {
    dispatch(created());
    dispatch(chatActions.enableUI());


    // if (!getState().chat.username) {
    //   dispatch(login({ username }));
    // }

    // dispatch(messageActions.fetchMessages());
  };
}


function connectionClosed() {
  return (dispatch) => {
    dispatch(closed());
    dispatch(chatActions.disableUI());
  };
}

function connectionError() {
  return (dispatch) => {
    dispatch(error());
    dispatch(chatActions.disableUI());
  };
}


export {
  wsConnect,
  connectionCreated,
  connectionClosed,
  connectionError,
};
