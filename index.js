'use strict';

const express = require ('express');
const app = express();
const cors = require ('cors');
const http = require('http');
cons server = http.createServer(app);
const io = require ('socket.io')(http);


app.use(cors());
app.use(express.json());
