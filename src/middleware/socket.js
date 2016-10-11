import * as actionTypes from '../constants/actionTypes';
import * as actions from '../actions';

const ENDPOINT = process.env.REACT_APP_ENDPOINT || 'ws://localhost:3001';

const socketMiddleware = () => {
  let socket = null;

  const onOpen = (ws, store) => () => {
    store.dispatch(actions.connectionCreated());
  };

  const onClose = (ws, store) => () => {
    store.dispatch(actions.connectionClosed());
  };

  const onMessage = (ws, store) => (event) => {
    const wsMessage = JSON.parse(event.data);
    store.dispatch(actions.receiveMessage(wsMessage));
  };

  return store => next => (action) => {
    switch (action.type) {
      case actionTypes.WS_CONNECT: {
        if (!socket) {
          socket = new WebSocket(ENDPOINT);
          socket.onmessage = onMessage(socket, store);
          socket.onclose = onClose(socket, store);
          socket.onopen = onOpen(socket, store);
        }
        break;
      }
      case actionTypes.NEW_MESSAGE: {
        const { message } = action;
        socket.send(JSON.stringify({
          type: action.type,
          message,
        }));
        store.dispatch(actions.setMessage(message));
        break;
      }
      case actionTypes.FETCH_MESSAGES: {
        socket.send(JSON.stringify({
          type: action.type,
        }));
        break;
      }
      case actionTypes.PROVIDE_MESSAGES: {
        const messages = store.getState().history.messages || [];

        if (messages.length > 0) {
          socket.send(JSON.stringify({
            type: action.type,
            data: {
              messages,
            },
          }));
        }
        break;
      }
      default:
        return next(action);
    }
  };
};

export default socketMiddleware();
