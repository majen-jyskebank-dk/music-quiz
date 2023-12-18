require('console-stamp')(console, 'yyyy-mm-dd HH:MM:ss');

const socket = require('./socket');

const app = require('express')();
const server = require('http').createServer(app);
const port = process.env.PORT || 3000;

socket.createSocket(server);

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
