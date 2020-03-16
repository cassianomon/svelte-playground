import { writable } from 'svelte/store';

const fontSize = writable('18'),
	words = writable(['hello index!', 'second index.']),
	planets = writable([]);

planets.subscribe(((list) => console.log(list)));

export { fontSize, words, planets };