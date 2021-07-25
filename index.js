'use strict';

const express = require ('express');
const app = express();
const cors = require ('cors');
const http = require('http');
const { Console } = require('console');
const server = http.createServer(app);
const PORT=process.env.PORT || 3000;
const io = require ('socket.io')(http);




app.use(cors());
app.use(express.json());
app.use(express.static('./public'))

io.on ('connection',socket=>{
    let payload='welcome to my website';
    io.emit('hello',payload);
});

server.listen(PORT,()=>{
    console.log('server working in the port')
});
