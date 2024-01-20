<script>
	import { gameState, finalPrice } from '$lib/stores.js';
	import groceries from '$lib/groceries.json';
	import Timer from './Timer.svelte';

	let incorrect;

	let totalPrice = 0;
	const shuffled = groceries.sort(() => 0.5 - Math.random());
	const items = shuffled.slice(0, Math.floor(Math.random() * (10 - 3 + 1) + 3)); // slices items from index 0 to a random # between 3 and 10 (inclusive)

	for (const item of items) {
		item.price = (Math.floor(Math.random() * 101) / 10).toFixed(1);
		totalPrice += parseFloat(item.price);
		item.userPrice = 0.0;
	}

	function finishCheckout() {
		let correct = true;
		let incorrectItems = [];
		for (const item of items) {
			if (item.price != item.userPrice) {
				correct = false;
				incorrectItems.push(item.name);
			}
		}
		if (correct) {
			let endTime = new Date().getTime();
			let timeElapsed = Math.floor((endTime - startTime) / 1000);
			console.log("TIME DEBUG: " + timeElapsed + " seconds");
			// log timeElapsed to history
			finalPrice.set(totalPrice.toFixed(2));
			gameState.set('TIP');
		} else {
			incorrect.innerHTML = "Try again. You scanned the following items incorrectly: " + "<strong>" + incorrectItems + "</strong>";
		}
	}

	let startTime = new Date().getTime();
	
</script>

{#each items as item, i}
	<div class="slider-container">
		{item.name}: ${item.price}
			<div style={"display: flex;"}>
				<input type="range" min="0" max="10" id={i} bind:value={item.userPrice} list="values" step="0.1"/>
				<p style={"margin: 5px;"}>{item.userPrice}</p>
			</div>
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
				<option value="10" label="10"></option>
			</datalist>
		
	</div>
{/each}
<Timer />
<div bind:this={incorrect}></div>
<button on:click={finishCheckout}>Finish Checkout</button>

<!-- <div class="debug">
	DEBUG:
	{JSON.stringify(items)}
</div> -->

<style>
	.slider-container {
		display: flex;
		flex-direction: column;
		margin-top: 20px;
		border:1px solid black;
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