import { io } from 'socket.io-client';
import type { Player } from '../models/player';
import type { Game } from '../models/game';
import { gameStore } from '../state/game';
import { player } from '../state/player';

const socket = io('ws://localhost:3000');

socket.on('game', (game: Game) => {
    gameStore.set(game);
});

socket.on('playerJoined', (player: Player) => {
    gameStore.addPlayer(player);
});

socket.on('playerLeft', (player: Player) => {
    gameStore.removePlayer(player);
});

export function joinGame(playerName: string) {
    socket.emit('join', playerName);
    player.set(playerName);
}
