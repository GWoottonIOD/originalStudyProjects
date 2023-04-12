//socket.io/get-started/chat
const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.emit('some event', { someProperty: 'some value', otherProperty: 'other value' }); // This will emit the event to all connected sockets

io.on('connection', (socket) => {//whole app - socket is individual client
  socket.broadcast.emit('hi'); // send a message to everyone but the person who just connected
});

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.broadcast.emit('userJoined','Someone has joined the chat');//sends a message to all of the sockets/clients
  socket.emit('userJoined','Welcome to the chat')//sends to the person that just connected

  socket.on('new user', () => {
    // socket.broadcast.emit('new user', 'new user has joined the chat') //sends to all but the initiating socket
    socket.emit('new user', {nickname: null, text: 'hello and welcome to this chat!'}) //send to only the initiating socket
})

socket.on('choose name', (name) => {
  socket.broadcast.emit('new user', {nickname: name, text: 'has joined the chat'}) //sends to all but the initiating socket
  socket.id = name;
}); 

  socket.on('disconnect', () => {
    console.log('user disconnected');
    io.emit('userLeft','Someone has left the chat');
  });
  socket.on('chat message', (msg) => {
    console.log('message: ' + msg);
  });
  socket.on('chat message', (msg) => {
    io.emit('chat message', msg);//sends a message to all of the sockets/clients
  });
});

io.on('connection', (socket) => {
  socket.on('chat message', (msg) => {
    io.emit('chat message', msg);//sends a message to all of the sockets/clients
  });
});


server.listen(3000, () => {
  console.log('listening on *:3000');
});