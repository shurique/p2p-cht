const WebSocketServer = require('ws').Server;

const wss = new WebSocketServer({ port: 3001 });

wss.on('connection', (ws) => {
  ws.on('message', (message) => {
    console.log('received: %s', message);

    wss.clients.forEach((client) => {
      if (client !== ws) {
        client.send(message);
      }
    });
  });
});
