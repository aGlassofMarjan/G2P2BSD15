if (process.env.NODE_ENV !== "production") {
  require('dotenv').config();
}

const express = require('express');
const app = express();
const routers = require('./routers');
const http = require("http");
const cors = require("cors");
const socketIO = require('socket.io');

const server = http.createServer(app);
app.use(cors());

const port = process.env.PORT || 3000;

const io = socketIO(server, {
  cors: {
    origin: "*",
    methods: ["GET", 'POST']
  }
});

io.on('connection', (socket) => {
  socket.emit('me', socket.id);

  socket.on('disconnect', () => {
    socket.broadcast.emit("callended");
  });

  socket.on("calluser", ({ userToCall, signalData, from, name }) => {
    io.to(userToCall).emit("calluser", { signal: signalData, from, name });
  });

  socket.on("answercall", (data) => {
    io.to(data.to).emit("callaccepted", data.signal);
  });
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routers);

server.listen(port, () => {
  console.log('success on port', port);
});

// module.exports = app;
