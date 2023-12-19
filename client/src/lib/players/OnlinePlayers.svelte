<script>
	import { blur } from "svelte/transition";
  import { gameStore } from "../../state/game";
</script>

<section>
  <h1>Online spillere</h1>
  <div class="flex gap-2">
    {#if $gameStore && $gameStore.players.length > 0}
      {#each $gameStore.players as player (player.id)}
        <span transition:blur|global={{ duration: 200 }}>
          {player.name}
        </span>
      {/each}
    {:else}
      <span>
        Ingen spillere online
      </span>
    {/if}
  </div>
</section>
