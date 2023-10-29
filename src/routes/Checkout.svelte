<script>
	import { gameState } from '$lib/stores.js';

	let items = [
		{ name: 'apple', price: 2, userPrice: 0 },
		{ name: 'banana', price: 1, userPrice: 0 },
		{ name: 'orange', price: 3, userPrice: 0 }
	];

	function finishCheckout() {
		gameState.set('TIP');
	}
</script>

{#each items as item, i}
	{item.name}: ${item.price}
	<input type="range" min="1" max="10" bind:value={item.userPrice} id={i} />
{/each}

<button on:click={finishCheckout}>Finish Checkout</button>

<div class="debug">
	DEBUG:
	{JSON.stringify(items)}
</div>
