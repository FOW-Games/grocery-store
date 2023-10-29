<script>
	import { gameState } from '$lib/stores.js';

	function finishTip() {
		gameState.set('HOME');
	}
</script>

<button on:click={finishTip}>Finish</button>
