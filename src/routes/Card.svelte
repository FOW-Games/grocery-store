<script>
	import { gameState } from '$lib/stores.js';
	import { round } from '$lib/stores.js';

	export let title = '<>';

	function start(title) {
		$round += 1;
		console.log("CHECKOUT DEBUG: " + title)
		console.log("ROUND: " + $round)
		if (title === "Self Checkout") {
			gameState.set('CHECKOUT');
		} else {
			gameState.set('HUMANCHECKOUT');
		}
	}

	function getRandPpl() {
		return Math.floor(Math.random() * 0);
	}
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="card" on:click={start(title)}>
	<div class="card-content">
		<h4>{title}</h4>
		<p># people in line: {getRandPpl()}</p>
	</div>
</div>

<style>
	.card {
		margin: 10px;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.card:hover {
		cursor: pointer;
	}

	.card-content {
		width: 250px;
	}
	.card-content > * {
		margin: 4px;
	}
</style>
