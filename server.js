const express = require('express')
const app = express()
const server = require('http').Server(app);
const io = require('socket.io')(server);
const{v4:uuidV4}=require('uuid');

 app.set('view engine','ejs');
app.use(express.static('public'));





app.get('/', function (req, res) {
  res.redirect(`/${uuidV4()}`)
})


app.get('/:room', function (req, res) {
    res.render('room',{roomID:req.params.room})
  })


  io.on('connection',socket=>{
    socket.on('join-room',(roomID)=>{
        socket.join(roomID);
        socket.to(roomID).broadcast.emit('user-connected');
    })
})

server.listen(3050);


