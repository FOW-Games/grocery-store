<script>
	import { gameState, finalPrice } from '$lib/stores.js';
	import groceries from '$lib/groceries.json';
	import Timer from './Timer.svelte';

	let totalPrice = 0.0;
	let speed = 10; //milliseconds
	let isBtnDisabled = true;

	const shuffled = groceries.sort(() => 0.5 - Math.random());
	const items = shuffled.slice(0, Math.floor(Math.random() * (10 - 3 + 1) + 3));

	for (const item of items) {
		item.price = parseFloat((Math.floor(Math.random() * 101) / 10).toFixed(1));
		totalPrice += parseFloat(item.price);
		item.userPrice = 0.0;
	}

	function finishCheckout() {
		finalPrice.set(totalPrice.toFixed(2));
		gameState.set('TIP');
	}
	
	let index = 0;
	function automateSliders() {
		if (index < items.length) {
			slide(index);
			let delay = 10*parseInt(speed*items[index].price);
			setTimeout(() => {
				automateSliders();
			}, delay);
			index += 1;
		} else {
			isBtnDisabled = false;
		}
	}

	function slide(index) {
		const interval = setInterval(function() 
		{
		if (items[index].userPrice < items[index].price) {
			items[index].userPrice = parseFloat((items[index].userPrice + 0.1).toFixed(1));
		} else {
			clearInterval(interval)
		}
		}, speed);
	}

	automateSliders();
	
</script>

{#each items as item, i}
	<div class="slider-container">
		{item.name}: ${item.price}
			<input type="range" min="0" max="10" id={i} bind:value={item.userPrice} list="values" step="0.1"/>
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
<button disabled={isBtnDisabled} on:click={finishCheckout} style="background-color: {isBtnDisabled ? 'grey' : '#007bff'}">Finish Checkout</button>

<!-- <div class="debug">
	DEBUG:
	{JSON.stringify(items)}
</div> -->

<style>
	.slider-container {
		display: flex;
		flex-direction: column;
		margin-top: 20px;
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

</style>