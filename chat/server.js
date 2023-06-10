const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

// In-memory storage for chat messages
const chatMessages = [];

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Handle socket.io connections
io.on('connection', (socket) => {
  console.log('New user connected');

  // Event listener for new chat messages
  socket.on('chatMessage', (message) => {
    chatMessages.push(message);
    io.emit('messageReceived', message);
  });

  // Event listener for user disconnections
  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

// Start the server
const port = 3000;
server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
