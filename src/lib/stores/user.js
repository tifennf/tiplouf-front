import { writable } from 'svelte/store';
import { getPlaylist } from '$lib/playlist';
// import { auth } from '$lib/auth';

const makeUserStore = () => {
	const { subscribe, set } = writable([]);

	const loadPlaylist = async (ip) => {
		const data = await getPlaylist(ip);

		set(data);
	};

	return {
		subscribe,
		loadPlaylist
	};
};

export const user = makeUserStore();
