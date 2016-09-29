const WebSocketServer = require('ws').Server;

const wss = new WebSocketServer({ port: 3001 });

wss.on('connection', (ws) => {
  ws.on('message', (message) => {
    console.log('received: %s', message);

    const clients = wss.clients.slice(wss.clients.indexOf(ws), 1);
    clients.forEach((client) => {
      client.send(message);
    });
  });

  ws.send('something');
});
