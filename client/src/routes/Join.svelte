<script lang="ts">
	import { onDestroy } from 'svelte';
	import type { Player } from '../models/player';
  import { joinGame } from '../socket/index'
	import { gameStore } from '../state/game';

  let name: string;
  let players: Player[] = [];

  const unsubscribe = gameStore.subscribe((game) => {
    players = game.players;
  });

  function handleSubmit() {
    if (!name) {
      alert('Du skal vælge et navn');
      return;
    }

    if (players.find((player) => player.name === name)) {
      alert('Navnet er allerede taget');
      return;
    }
    
    joinGame(name);
  }

  onDestroy(unsubscribe);
</script>


<h1>Klar til at spille?</h1>
<p>For at spille skal du først vælge et navn.</p>

<form on:submit|preventDefault={handleSubmit}>
  <input type="text" bind:value={name} placeholder="Navn" />
  <button type="submit">Spil</button>
</form>

{#if players.length > 0}
  <h2>Spillere</h2>
  <ul>
    {#each players as player}
      <li>{player.name}</li>
    {/each}
  </ul>
{/if}
