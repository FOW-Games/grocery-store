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
		for (const item of items) {
			if (item.price !== item.userPrice) {
				correct = false;
				break;
			}
		}
		if (correct) {
			finalPrice.set(totalPrice);
			gameState.set('TIP');
		} else {
			alert("Please wait for checkout to complete.");
		}
	}

	function automateSlider(index) {
		const interval = setInterval(function() 
			{
			if (items[index].userPrice < items[index].price) {
				items[index].userPrice += 1;
			} else {
				clearInterval(interval)
			}
		}, 10);
	}

	
</script>

{#each items as item, i}
	<div class="slider-container">
		{item.name}: ${item.price}
		
			<input type="range" min="0" max="100" id={i} on:load={automateSlider(i)} bind:value={item.userPrice} list="values"/>
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

</style>