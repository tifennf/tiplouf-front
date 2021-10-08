import { authStore } from './authStore';
import { playlistStore } from './playlistStore';

const init = async () => {
	authStore.login();
	playlistStore.loadPlaylist();
};

export default init;
