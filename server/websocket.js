const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const axios = require('axios');

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
    console.log('Nouveau post reçu:', post);

    // Vérifier les données
    if (!post.userName || !post.text) {
      console.error('Données manquantes dans le post:', post);
      return;
    }

    // Envoyer les données du post à l'API FastAPI
    axios.post('http://localhost:8000/save_post', {
      userName: post.userName,
      text: post.text,
      audioURL: post.audioURL || null 
    })
    .then(response => {
      console.log('Réponse de FastAPI:', response.data);
    })
    .catch(error => {
      console.error('Erreur lors de l\'envoi du post à FastAPI:', error.response ? error.response.data : error.message);
    });

    // Émettre l'événement 'postUpdate'
    io.emit('postUpdate', post);
  });

  socket.on('disconnect', () => {
    console.log('Utilisateur déconnecté');
  });
});

server.listen(3001, () => {
  console.log('Serveur WebSocket démarré sur le port 3001');
});
