<script>
	import OnlinePlayers from "$lib/players/OnlinePlayers.svelte";
import "../app.css";
</script>

<div class="flex flex-col">
	<aside>
		<OnlinePlayers />
	</aside>

	<main>
		<slot />
	</main>
</div>
