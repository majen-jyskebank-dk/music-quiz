<script lang="ts">
	import type { Player } from '../models/player';
  import { joinGame } from '../socket/index'
	import { gameStore } from '../state/game';

  let name: string;
  let players: Player[] = $gameStore ? $gameStore.players : [];

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
</script>

<h1>Klar til at spille?</h1>
<p>For at spille skal du først vælge et navn.</p>

<form on:submit|preventDefault={handleSubmit}>
  <input type="text" bind:value={name} placeholder="Navn" />
  <button type="submit">Spil</button>
</form>
