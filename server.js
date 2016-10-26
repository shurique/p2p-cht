const express = require('express');
const WebSocketServer = require('ws').Server;

const PORT = process.env.PORT || 3001;

const server =
  express().use((req, res) => {
    res.send('Hello World!');
  })
  .listen(PORT, () => console.log(`Listening on ${ PORT }`));

const wss = new WebSocketServer({ server });

wss.on('connection', (ws) => {
  console.log('Client connected...', wss.clients.length);

  ws.on('message', (message) => {
    console.log('received: %s', message);

    wss.clients.forEach((client) => {
      if (client !== ws) {
        client.send(message);
      }
    });
  });

  ws.on('close', () => {
    console.log('Client disconnected');
  });
});
