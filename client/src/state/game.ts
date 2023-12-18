import { writable } from "svelte/store";
import type { Game } from "../models/game";
import type { Player } from "../models/player";

function createGame() {
    const { subscribe, set, update } = writable<Game>({players: []});

    return {
        subscribe,
        addPlayer: (player: Player) => update(game => {
            game.players.push(player);
            return game;
        }),
        removePlayer: (player: Player) => update(game => {
            game.players = game.players.filter(p => p.id !== player.id);
            return game;
        }),
        set: (game: Game) => set(game),
    };
}

export const gameStore = createGame();
