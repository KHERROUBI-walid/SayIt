const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

io.on('connection', (socket) => {
  console.log('Un utilisateur s\'est connecté');

  socket.on('newPost', (post) => {
    console.log('Nouveau post reçu :', post);
    io.emit('postUpdate', post);
  });

  socket.on('disconnect', () => {
    console.log('Utilisateur déconnecté');
  });
});

server.listen(3001, () => {
  console.log('Serveur WebSocket démarré sur le port 3001');
});
