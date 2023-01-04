const express = require('express');
const path = require('path');
const http = require('http');
const cors = require('cors');
const Rooms = require('./Database/Models/Rooms');
const Messages = require('./Database/Models/Messages');
const jwt = require('jsonwebtoken');
const createRouter = require('./Routes/CreateRoutes');
const joinRouter = require('./Routes/JoinRoutes');

const app = express();






const server = http.createServer(app);

const {Server} = require('socket.io');
const messageRouter = require('./Routes/MessageRoutes');



//temporaryt socket cors;;;
const io = new Server(server, {cors:{origin:'*'}});

app.use(express.json());



app.use(cors());




Rooms.sync();
Messages.sync();


app.use(createRouter);


app.use(joinRouter);
app.use(messageRouter);

io.on('connection',(socket)=>{


    //console.log(socket.id);

    const token = socket.handshake.auth.token;
 

    socket.on('joined',(data)=>{



        jwt.verify(token, process.env.SECRET, (err, decoded)=>{

            socket.join(decoded.roomName);

            console.log(socket.rooms);

        })

       // console.log(data);
        //console.log(token);
    })
    

    socket.on('sendMsg', data=>{

        jwt.verify(data.token, process.env.SECRET, (err, decoded)=>{
            socket.join(decoded.roomName);
            console.log(decoded.roomName);
            io.to(decoded.roomName).emit('receieve', {message:data.message, username:data.username, avatar:data.avatar});

        });

        

    });





});

app.use(express.static(path.join(__dirname,'build')));

app.use('*', (req, res,next)=>{

res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
})




server.listen(process.env.PORT || 5000);