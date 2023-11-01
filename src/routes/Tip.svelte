<script>
	import { gameState } from '$lib/stores.js';

	function finishTip() {
		gameState.set('HOME');
	}
</script>

<h2>Please provide a tip</h2>

<input type="radio" name="0%" id="zero">0%
<input type="radio" name="0%" id="zero">10%
<input type="radio" name="0%" id="zero">20%


<button on:click={finishTip}>Finish</button>
