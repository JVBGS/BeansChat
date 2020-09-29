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
    if (messages.length < 9){
      messages.push(message);
      dingSound.currentTime = 0;
      dingSound.play();
    }
    else{
      messages.shift();
      messages.push(message);
    }
    for (i = 0 ; i < messages.length; i++){
      document.getElementById("Message"+i).innerHTML = messages[i];
      document.getElementById("Message"+i).stule.color="#303040";
    }
  })
