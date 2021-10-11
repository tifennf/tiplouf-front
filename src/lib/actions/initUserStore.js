import { user } from '$lib/stores/user';

const initUserStore = (node, isLogged) => {
	if (!isLogged) {
		return;
	}

	const playlistIp = import.meta.env.VITE_PLAYLIST_IP;

	user.loadPlaylist(playlistIp);
};

export default initUserStore;
