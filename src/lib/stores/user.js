import { writable } from 'svelte/store';
import { getPlaylist } from '$lib/playlist';
// import { auth } from '$lib/auth';

const makeUserStore = () => {
	const { subscribe, set, update } = writable([]);

	const loadPlaylist = async (ip) => {
		const data = await getPlaylist(ip);

		set(data);
	};

	const addPlaylist = (playlist) => {
		update((list) => [...list, playlist]);
	};

	const removePlaylist = async (id) => {
		update((list) => {
			const index = list.findIndex((playlist) => playlist.p_id === id);

			return [...list.slice(0, index), ...list.slice(index + 1)];
		});
	};

	return {
		subscribe,
		loadPlaylist,
		addPlaylist,
		removePlaylist
	};
};

export const user = makeUserStore();
