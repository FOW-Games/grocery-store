<script>
	import { gameState, finalPrice } from '$lib/stores.js';
	import groceries from '$lib/groceries.json';

	let totalPrice = 0;
	const shuffled = groceries.sort(() => 0.5 - Math.random());
	const items = shuffled.slice(0, Math.floor(Math.random() * (10 - 3 + 1) + 3));

	for (const item of items) {
		item.price = Math.floor(Math.random() * (100 - 0 + 1) + 0);
		totalPrice += item.price;
		item.userPrice = 0;
	}

	function finishCheckout() {
		let correct = true;
		let incorrectItems = [];
		for (const item of items) {
			if (item.price !== item.userPrice) {
				correct = false;
				incorrectItems.push(item.name);
			}
		}
		if (correct) {
			let endTime = new Date().getTime();
			let timeElapsed = Math.floor((endTime - startTime) / 1000);
			console.log("TIME DEBUG: " + timeElapsed + " seconds");
			// log timeElapsed to history
			finalPrice.set(totalPrice);
			gameState.set('TIP');
		} else {
			alert("Try again. You have scanned the following items incorrectly: " + incorrectItems);
		}
	}

	let startTime = new Date().getTime();
	
</script>

{#each items as item, i}
	<div class="slider-container">
		{item.name}: ${item.price}
			<div style={"display: flex;"}>
				<input type="range" min="0" max="100" id={i} bind:value={item.userPrice} list="values"/>
				<p style={"margin: 5px;"}>{item.userPrice}</p>
			</div>
			<datalist id="values">
				<option value="0" label="0"></option>
				<option value="10" label="10"></option>
				<option value="20" label="20"></option>
				<option value="30" label="30"></option>
				<option value="40" label="40"></option>
				<option value="50" label="50"></option>
				<option value="60" label="60"></option>
				<option value="70" label="70"></option>
				<option value="80" label="80"></option>
				<option value="90" label="90"></option>
				<option value="100" label="100"></option>
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
		width: 500px;
	}

	option {
		padding: 2px;
	}

	input[type="range"] {
		width: 500px;
		margin: 0;
		pointer-events: none;
	}

	input[type=range]::-webkit-slider-thumb {
  		pointer-events: auto !important;
	}

	input[type=range]::-moz-range-thumb {
		pointer-events: auto !important;
	}

	input[type=range]::-ms-thumb {
		pointer-events: auto !important;
	}

</style>