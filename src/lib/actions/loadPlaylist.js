import { playlistStore } from '$lib/stores/user/playlistStore';

const loadPlaylist = async () => playlistStore.loadPlaylist();

export default loadPlaylist;
