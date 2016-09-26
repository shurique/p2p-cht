export default function createWS(url = 'localhost', protocol = 'ws', port = '3001') {
  const endpoint = `${protocol}://${url}:${port}`;
  const socket = new WebSocket(endpoint);

  const send = function WSSend(data) {
    return socket.send(JSON.stringify({
      data,
    }));
  };

  socket.onopen = function onOpen(event) {
    console.log('Connection created');
    send('test');
  };

  socket.onclose = function onClose(event) {
    console.log('Connection closed', event);
  };

  socket.onmessage = function onMessage(event) {
    console.log('Received data: ', event);
  };

  socket.onerror = function onError(error) {
    console.log('Error ', error);
  };

  return {
    socket,
    send,
  };
}
