import { writable } from 'svelte/store';
import { getPlaylist } from '$lib/playlist';
import { auth } from '$lib/auth';

const makeUserStore = () => {
	const { subscribe, update } = writable({ isLogin: false, playlist: [] });

	const setLogin = () => {
		update((current) => {
			const update = {
				...current,
				isLogin: true
			};

			return update;
		});
	};

	const login = async (ip, userData) => {
		try {
			const res = await auth(ip, JSON.stringify(userData));

			if (res.status !== 200) {
				throw 'Could not login';
			}
			setLogin();
			return Promise.resolve(true);
		} catch (error) {
			return Promise.reject(error);
		}
	};

	const loginCheck = async (ip, id) => {
		const sessionCheck = {
			session_id: id
		};

		await auth(ip, JSON.stringify(sessionCheck));

		setLogin();
	};

	const loadPlaylist = async (ip) => {
		const data = await getPlaylist(ip);

		update((current) => {
			const update = {
				...current,
				playlist: data
			};

			return update;
		});
	};

	const init = async ({ loginIp, playlistIp }, userData, id) => {
		console.log(id);

		try {
			if (userData) {
				await login(loginIp, userData);
			} else if (id) {
				await loginCheck(loginIp, id);
			} else {
				throw 'Invalid data';
			}
			loadPlaylist(playlistIp);
		} catch (error) {
			console.error(error);
		}
	};

	return {
		subscribe,
		init,
		login,
		loadPlaylist,
		setLogin
	};
};

export const user = makeUserStore();
