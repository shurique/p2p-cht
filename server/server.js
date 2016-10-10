const WebSocketServer = require('ws').Server;

const wss = new WebSocketServer({ port: 3001 });

wss.on('connection', (ws) => {
  ws.on('message', (message) => {
    console.log('received: %s', message);

    // const clients = wss.clients.splice(wss.clients.indexOf(ws), 1);
    const clients = wss.clients;

    console.log(clients.length);
    clients[1].send(message);
    // clients.forEach((client) => {
    //   client.send(message);
    // });
  });
});
