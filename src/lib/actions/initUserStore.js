import { user } from '$lib/stores/user';

const initUserStore = async (node, isLogged) => {
	try {
		if (!isLogged) {
			throw 'Not logged';
		}

		const playlistIp = import.meta.env.VITE_PLAYLIST_IP;

		user.setLogin();
		user.loadPlaylist(playlistIp);
	} catch (error) {
		console.error(error);
	}
};

export default initUserStore;
