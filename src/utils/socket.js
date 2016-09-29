import * as actions from '../actions';

export default function createWS(options = { store: {}, url: 'localhost', protocol: 'ws', port: '3001' }) {
  const { store, url, protocol, port } = options;
  const endpoint = `${protocol}://${url}:${port}`;
  const socket = new WebSocket(endpoint);

  const send = function WSSend(type, data) {
    return socket.send(JSON.stringify({
      type,
      data,
    }));
  };

  socket.onopen = function onOpen(event) {
    console.log('Connection created');
  };

  socket.onclose = function onClose(event) {
    console.log('Connection closed', event);
  };

  socket.onmessage = function onMessage(event) {
    console.log('Received data: ', event);

    store.dispatch(actions.receiveMessage(event.data));
  };

  socket.onerror = function onError(error) {
    console.log('Error ', error);
  };

  return {
    socket,
    send,
  };
}
