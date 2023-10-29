<script>
	import Card from './Card.svelte';
</script>

<div class="choices">
	<Card title="Self Checkout" />
	<Card title="Human Checkout" />
</div>

<style>
	.choices {
		position: fixed;
		top: 50%;
		left: 50%;
		-webkit-transform: translate(-50%, -50%);
		transform: translate(-50%, -50%);
		width: 400px;
		height: 600px;
		/* height: 100vh; */
		display: flex;
		flex-wrap: wrap;
		flex-direction: column;
	}
</style>
