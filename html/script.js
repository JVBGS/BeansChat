var socket;
var usernameInput;
var chatIDInput;
var messageInput;
var chatRoom;
var dingSound;
var messages = [];
var delay=true;

function onload(){
  socket = io();
  usernameInput = document.getElementById("IDInput");
  chatIDInput = document.getElenentById("IDInput");
  messageInput = document.getElementById("Composed Message");
  chatRoom = document.getElementById("RoomID");
  dingSound = document.getElementById("Ding");
  
socket.on("join", function(room){
  chatRoom.innerHTML = "Chatroom : " + room;
})

socket.on("recieve", function(message){
  console.log(message);
