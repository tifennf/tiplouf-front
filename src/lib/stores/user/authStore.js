import { writable } from 'svelte/store';

const makeAuthStore = (init) => {
	const { subscribe, set } = writable(init);

	const login = async (callback) => {
		const res = await callback();

		if (res.status !== 200) {
			throw 'Failed to login';
		}

		set(true);
	};

	return {
		subscribe,
		login
	};
};

export const authStore = makeAuthStore(false);
