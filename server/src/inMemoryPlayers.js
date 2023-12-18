let players = [];

function getPlayers() {
    return players;
}

function createPlayer(name, id) {
    const player = {
        name,
        id,
        points: 0,
    };
    players.push(player);
    return player;
}

function removePlayer(id) {
    const player = players.find(p => p.id === id);
    players = players.filter(p => p.id !== id);
    return player;
}

module.exports = {
    getPlayers,
    createPlayer,
    removePlayer,
}
