<!-- Home.svelte -->

<script>
	import '../app.css';
	import Home from './Home.svelte';
	import Checkout from './Checkout.svelte';
	import HumanCheckout from './HumanCheckout.svelte';
	import Tip from './Tip.svelte';

	import { gameState } from '$lib/stores.js';
</script>

<div class="main">
	{#if $gameState === 'HOME'}
		<Home />
	{:else if $gameState === 'CHECKOUT'}
		<Checkout />
	{:else if $gameState === 'TIP'}
		<Tip />
	{:else if $gameState === 'HUMANCHECKOUT'}
		<HumanCheckout />
	{/if}
</div>

<style>
	.main {
		position: fixed;
		top: 50%;
		left: 50%;
		-webkit-transform: translate(-50%, -50%);
		transform: translate(-50%, -50%);
		width: 800px;
		height: 700px;
		overflow-y: scroll;
		border: 1px solid black;
		padding: 20px;
	}
</style>
