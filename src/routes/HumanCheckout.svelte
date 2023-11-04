<script>
	import { gameState } from '$lib/stores.js';

	function getRandPrice() {
		return Math.floor(Math.random() * (9) + 1);
	}

	let items = [
		{ name: 'Apples', price: getRandPrice(), humanPrice: 0},
		{ name: 'Bananas', price: getRandPrice(), humanPrice: 0},
		{ name: 'Oranges', price: getRandPrice(), humanPrice: 0,}
	];

	function finishCheckout() {
		gameState.set('TIP');
	}

	function automateSlider(index) {
		const interval = setInterval(function() 
			{
			if (items[index].humanPrice < items[index].price) {
				items[index].humanPrice += 1;
			} else {
				clearInterval(interval)
			}
		}, 600);
	}

	
</script>

{#each items as item, i}
	<div class="slider-container">
		{item.name}: ${item.price}
		
			<input type="range" min="0" max="9" id={i} on:load={automateSlider(i)} bind:value={item.humanPrice} list="values"/>
			<datalist id="values">
				<option value="0" label="0"></option>
				<option value="1" label="1"></option>
				<option value="2" label="2"></option>
				<option value="3" label="3"></option>
				<option value="4" label="4"></option>
				<option value="5" label="5"></option>
				<option value="6" label="6"></option>
				<option value="7" label="7"></option>
				<option value="8" label="8"></option>
				<option value="9" label="9"></option>
			</datalist>
		
	</div>
{/each}

<button on:click={finishCheckout}>Finish Checkout</button>

<div class="debug">
	DEBUG:
	{JSON.stringify(items)}
</div>

<style>
	.slider-container {
		display: flex;
		flex-direction: column;
		margin: 20px;
	}

	datalist {
		display: flex;
		justify-content: space-between;
		width: 200px;
	}

	option {
		padding: 2px;
	}

	input[type="range"] {
		width: 200px;
		margin: 0;
	}

</style>