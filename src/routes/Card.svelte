<script>
	import { gameState } from '$lib/stores.js';

	export let title = '<>';

	function start() {
		gameState.set('CHECKOUT');
	}
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="card" on:click={start}>
	<div class="card-content">
		<h4>{title}</h4>
		<p># people in line: 0</p>
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
