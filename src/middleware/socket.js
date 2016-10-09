import * as actions from '../actions';

const options = { url: 'localhost', protocol: 'ws', port: '3001' };
const { url, protocol, port } = options;
const endpoint = `${protocol}://${url}:${port}`;

const socketMiddleware = () => {
  let socket = new WebSocket(endpoint);

  const onOpen = (ws, store) => (event) => {
    console.log('Connection created', event);
  };

  const onClose = (ws, store) => (event) => {
    console.log('Connection closed', event);
  };

  const onMessage = (ws, store) => (event) => {
    console.log(event.data);

    // const message = JSON.parse(event.data);
    const message = {};
    store.dispatch(actions.receiveMessage(message));
  };

  return store => next => (action) => {
    console.log('Socket middleware: ', action.type);

    if (!socket) {
      socket = new WebSocket(endpoint);

      socket.onmessage = onMessage(socket, store);
      socket.onclose = onClose(socket, store);
      socket.onopen = onOpen(socket, store);
    }

    switch (action.type) {
      default:
        return next(action);
    }
  };
};

export default socketMiddleware();
