import uuid from 'node-uuid';

import * as actionTypes from '../constants/actionTypes';
import * as actions from '../actions';

const options = { url: 'localhost', protocol: 'ws', port: '3001' };
const { url, protocol, port } = options;
const endpoint = `${protocol}://${url}:${port}`;
const username = `User_${uuid.v4().split('-')[0]}`;

function setOwner(message, username) {
  return Object.assign({}, message, {
    owner: message.author === username,
  });
}

const socketMiddleware = () => {
  let socket = null;

  const onOpen = (ws, store) => (event) => {
    store.dispatch(
      actions.login({
        username,
      })
    );
  };

  const onClose = (ws, store) => (event) => {
    console.log('Connection closed', event);
  };

  const onMessage = (ws, store) => (event) => {
    const data = JSON.parse(event.data);

    console.log('Receive message', data);
    switch (data.type) {
      case actionTypes.NEW_MESSAGE: {
        store.dispatch(actions.setMessage(setOwner(data.message, store.getState().chat.username)));
        break;
      }
      default:
        store.dispatch(actions.receiveMessage(data));
    }
  };

  return store => next => (action) => {
    console.log('Socket middleware: ', action.type);

    switch (action.type) {
      case actionTypes.WS_CONNECT: {
        if (!socket) {
          socket = new WebSocket(endpoint);
          socket.onmessage = onMessage(socket, store);
          socket.onclose = onClose(socket, store);
          socket.onopen = onOpen(socket, store);
        }

        break;
      }
      case actionTypes.NEW_MESSAGE: {
        const { message } = action;
        socket.send(JSON.stringify({
          type: actionTypes.NEW_MESSAGE,
          message,
        }));
        store.dispatch(actions.setMessage(setOwner(message, store.getState().chat.username)));
        break;
      }
      default:
        return next(action);
    }
  };
};

export default socketMiddleware();
