const express = require('express');
const path = require('path');
const WebSocketServer = require('ws').Server;

const PORT = process.env.PORT || 3001;

const buildPath = path.join(__dirname + '/build');

const server =
  express()
    .use('/static', express.static(path.join(buildPath + '/static')))
    .use((req, res) => res.sendFile(path.join(buildPath + '/index.html')))
    .listen(PORT, () => {
      console.log(`Listening on ${ PORT }`)
    });

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
