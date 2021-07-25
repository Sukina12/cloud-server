'use strict';

const socket = io();

io.socket ('connect', () => {
    socket.on('hello', payload => {
        console.log(payload);
    });

})

