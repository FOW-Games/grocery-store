/* All things related to logging data should be put in here */ 

import { readable } from 'svelte/store';

let start;

const time = readable(new Date(), function start(set) {
	const interval = setInterval(() => {
		set(new Date());
	}, 10);

	return function stop() {
		clearInterval(interval);
	};
});
const timeStamp = derived(time, ($time) => $time - start);
const history = writable([]);

let t;
timeStamp.subscribe((v) => {
	t = v / 1000;
});

/**
 * Resets the global timer
 */
export function resetTimer() {
	start = new Date();
}

/**
 * Writes a timestamped message to the history array.
 */
export function logHistory(message) {
	history.update((list) => {
		list.push({ time: t || 0.0, event: message });
		console.log(list);
		return list;
	});
}

export function serializeHistory() {
    // TOOD: this function should compress the history array
    // to send away to another source to store (database or qualtrics?)
}
