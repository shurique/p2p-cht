const WebSocketServer = require('ws').Server;
const wss = new WebSocketServer({ port: 3001 });

let clients = {};

wss.on('connection', (ws) => {
  let index = wss.clients.indexOf(ws);
  console.log(index);

  ws.on('message', (message) => {
    console.log('received: %s', message);
  });

  ws.send('something');
});
