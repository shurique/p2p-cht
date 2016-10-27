import * as actionTypes from '../constants/actionTypes';
import * as actions from '../actions';

function getEndpoint() {
  const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
  return `${protocol}://${window.location.host}`;
}

const ENDPOINT = getEndpoint();
// const ENDPOINT = `ws://${window.location.host}:` || 'ws://localhost:3001';
const TIMEOUT = process.env.REACT_APP_TIMEOUT || 5000;

function wsCreate(endpoint, store) {
  const ws = new WebSocket(endpoint);

  ws.onopen = () => {
    store.dispatch(actions.connectionCreated());
  };

  ws.onclose = () => {
    store.dispatch(actions.connectionClosed());
  };

  ws.onerror = () => {
    store.dispatch(actions.connectionError());
  };

  ws.onmessage = (event) => {
    const wsMessage = JSON.parse(event.data);
    store.dispatch(actions.receiveMessage(wsMessage));
  };

  return ws;
}

function wsSend(ws, type, data = {}) {
  return ws.send(JSON.stringify({ type, data }));
}

function socketMiddleware() {
  let socket = null;
  let reconnectTimer = null;

  return store => next => (action) => {
    switch (action.type) {
      // Socket handlers
      case actionTypes.WS_CONNECT: {
        socket = wsCreate(ENDPOINT, store);

        clearTimeout(reconnectTimer);
        reconnectTimer = null;
        break;
      }
      case actionTypes.CONNECTION_CLOSED:
      case actionTypes.CONNECTION_ERROR: {
        reconnectTimer = setTimeout(() => {
          store.dispatch(actions.wsConnect());
        }, TIMEOUT);

        break;
      }
      // App handlers
      case actionTypes.NEW_MESSAGE: {
        wsSend(socket, action.type, { message: action.message });

        store.dispatch(actions.setMessage(action.message));
        break;
      }
      case actionTypes.FETCH_MESSAGES: {
        wsSend(socket, action.type);
        break;
      }
      case actionTypes.PROVIDE_MESSAGES: {
        const messages = store.getState().history.messages || [];

        if (messages.length > 0) {
          wsSend(socket, action.type, { messages });
        }
        break;
      }
      default:
        return next(action);
    }
  };
}

export default socketMiddleware();
