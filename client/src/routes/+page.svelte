<script>
	import { player } from "../state/player";
	import Join from "./Join.svelte";
</script>


<section>
	{#if !$player}
		<Join />
	{:else}
		<h1>Velkommen {$player}</h1>
	{/if}
</section>