import { getPlaylist } from '$lib/playlist';
import { writable } from 'svelte/store';

const makePlaylistStore = (init) => {
	const { subscribe, set } = writable(init);

	const loadPlaylist = async () => {
		const data = await getPlaylist();
		set(data);
	};

	return {
		subscribe,
		loadPlaylist
	};
};

export const playlistStore = makePlaylistStore([]);
