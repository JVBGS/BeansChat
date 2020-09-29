const http = require("http");
const express = require("express");
const socketio = require("socket.io");
const path = require("path");

const app = express();
const httpserver = http.Server(app);
const io = socketio(httpserver);

const gamedirectory = path.join(_dirname, "html");

app.use(express.static(gamedirectory));

httpserver.listen(3000);

var rooms = [];
var usernames = [];

io.on("connection",function(socket){
  
  socket.on("join", function(room, username){
    if (username !=""){
      room[socket.id] = room;
      username[socket.id] = username;
      socket.leaveAll();
      socket.join(room);
      io.in(room).emit("recieve", "Server : " + username + "has entered the chat.");
      socket.emit("join", room);
    }
  })
  
  socket.on("send", function(message){
    io.in(rooms[socket.id]).emit("recieve", username[socket.id] +" : " + message);
  })
