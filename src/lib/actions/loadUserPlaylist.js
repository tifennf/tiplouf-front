import { getAllPlaylist } from '$lib/playlist';
import user from '$lib/stores/user.js';

const loadUserPlaylist = async (node, ip) => {
	const response = await getAllPlaylist(ip);

	const res = await response.json();

	user.update((current) => {
		const update = {
			...current,
			playlist: res.data
		};

		return update;
	});
};

export default loadUserPlaylist;
