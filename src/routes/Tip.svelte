<script>
	import { gameState, finalPrice } from '$lib/stores.js';

	let noTipToggle = true;

	const tips = [
		[10, 15, 20],
		[15, 18, 20],
		[15, 20, 25],
		[20, 25, 30]
	];

	const displayedPercents = tips[Math.floor(Math.random() * (tips.length))];
	const displayedTips = displayedPercents.map((tip) => ($finalPrice * tip / 100).toFixed(2));

	let custom = false;
	let customInput = '';

	function finishTip(tip) {
		if (tip !== '' && tip >= 0 && tip <= 100) {
			console.log("TIP DEBUG: " + tip +"%");
			// log tip variable to history
			gameState.set('HOME');
		} else {
			alert("Invalid custom tip. Try again.");
		}
	}
</script>

<div class="container">

<h1>${$finalPrice}</h1>

<h2>Add a tip?</h2>

<div>
	<button class="btn" on:click={() => finishTip(displayedPercents[0])}>{displayedPercents[0]}% <br/>${displayedTips[0]}</button>
	<button class="btn" on:click={() => finishTip(displayedPercents[1])}>{displayedPercents[1]}% <br/>${displayedTips[1]}</button>
	<button class="btn" on:click={() => finishTip(displayedPercents[2])}>{displayedPercents[2]}% <br/>${displayedTips[2]}</button>
</div>

<button class="otherBtns" on:click={() => {custom = true}}>Custom</button>

{#if custom}
	<div style={"display: flex;"}>
		<p>$</p>
		<input style={"width: 50px; height: 20px;"} type="number" bind:value={customInput}/>
	</div>
	<p style={"margin: 0px;"}>{(customInput / $finalPrice * 100).toFixed(2)}%</p>
	<button on:click={() => finishTip((customInput / $finalPrice * 100).toFixed(2))}>Submit</button>
{/if}

<br/>
{#if noTipToggle}
  <button class="otherBtns" on:click={() => finishTip(0)}>No Tip</button>
{/if}

</div>

<style>
	.container {
		display: grid;
		justify-content: center;
	}
	.btn {
		width: 100px;
		height: 60px;
	}
	.otherBtns {
		width: 300px;
		height: 50px;
	}
</style>
