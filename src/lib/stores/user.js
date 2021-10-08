import { writable } from 'svelte/store';
import { getPlaylist } from '$lib/playlist';
import { auth } from '$lib/auth';

const ip = import.meta.env.VITE_API_IP;

const makeAuthStore = (init) => {
	const { subscribe, set } = writable(init);

	const login = async (userData) => {
		await auth(ip, JSON.stringify(userData), 'Could not login');

		set(true);
	};

	return {
		subscribe,
		login
	};
};

const makePlaylistStore = (init) => {
	const { subscribe, set } = writable(init);

	const loadPlaylist = async () => {
		const data = await getPlaylist(ip);
		set(data);
	};

	return {
		subscribe,
		loadPlaylist
	};
};

const init = async (userData) => {
	authStore.login(userData);
	playlistStore.loadPlaylist();
};

const authStore = makeAuthStore(false);
const playlistStore = makePlaylistStore([]);

export { init, authStore, playlistStore };
