const playerService = require('./inMemoryPlayers');
const { Server } = require('socket.io');

async function createSocket(httpServer) {
    const io = new Server(httpServer, {
        cors: {
            origin: 'http://localhost:5173',
        }
    });

    io.on('connection', (socket) => {
        console.log(`Socket ${socket.id} connected.`);
        socket.emit('game', { players: playerService.getPlayers() });

        socket.on('join', (name) => {
            const player = playerService.createPlayer(name, socket.id);
            socket.emit('playerJoined', player);
            socket.broadcast.emit('playerJoined', player);
        });

        socket.on('disconnect', () => {
            console.log(`Socket ${socket.id} disconnected.`);
            let player = playerService.removePlayer(socket.id);
            if (player) {
                socket.broadcast.emit('playerLeft', player);
            }
        });
    });
}

module.exports = {
    createSocket,
};
