import { writable } from 'svelte/store';

export const gameState = writable('HOME');

export const finalPrice = writable(0);

export const round = writable(0);


