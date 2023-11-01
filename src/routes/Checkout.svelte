<script>
	import { gameState } from '$lib/stores.js';

	let items = [
		{ name: 'apple', price: 2, userPrice: 0 },
		{ name: 'banana', price: 1, userPrice: 0 },
		{ name: 'orange', price: 3, userPrice: 0 }
	];

	function finishCheckout() {
		gameState.set('TIP');
		// Maybe make it so that we can skip the tip section sometimes
	}

	// Maybe add custom behavior for different cashiers 
	function automateSliders() {
		// TODO
	}
</script>

<!-- make better ui, maybe automate the sliders -->
{#each items as item, i}
	<div>
		{item.name}: ${item.price}
		<input type="range" min="1" max="10" bind:value={item.userPrice} id={i} />
	</div>
{/each}

<button on:click={finishCheckout}>Finish Checkout</button>

<div class="debug">
	DEBUG:
	{JSON.stringify(items)}
</div>
