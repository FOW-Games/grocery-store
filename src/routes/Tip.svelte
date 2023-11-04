<script>
	import { gameState } from '$lib/stores.js';

	function finishTip() {
		gameState.set('HOME');
	}
</script>

<h2>Please provide a tip</h2>

<input type="radio" name="0%" id="zero">0%
<input type="radio" name="10%" id="ten">10%
<input type="radio" name="20%" id="twenty">20%
Custom Tip: <input type="number" name="custom" id="custom" style="width: 25px;">%


<!-- custom tip level %, better UI  -->

<button on:click={finishTip}>Finish</button>
