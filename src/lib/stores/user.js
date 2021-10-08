import { writable } from 'svelte/store';
import { getPlaylist } from '$lib/playlist';
import { auth } from '$lib/auth';

const ip = import.meta.env.VITE_API_IP;

const makeUserStore = () => {
	const { subscribe, update } = writable({ isLogin: false, playlist: [] });

	const loginPath = `${ip}/auth/login`;
	const playlistPath = `${ip}/playlist`;

	const login = async (userData) => {
		await auth(loginPath, JSON.stringify(userData), 'Could not login');

		update((current) => (current.isLogin = true));
	};

	const loadPlaylist = async () => {
		const data = await getPlaylist(playlistPath);

		update((current) => (current.playlist = data));
	};

	const init = async (userData) => {
		await login(userData);
		loadPlaylist();
	};

	return {
		subscribe,
		init,
		login,
		loadPlaylist
	};
};

export const user = makeUserStore();
