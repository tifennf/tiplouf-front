import { writable } from 'svelte/store';

const user = writable({
	playlist: [],
	isLogged: false
});

export default user;
