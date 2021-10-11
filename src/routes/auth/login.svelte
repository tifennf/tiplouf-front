<script>
	import { goto } from '$app/navigation';
	import { session } from '$app/stores';
	import { auth } from '$lib/auth';
	import Form from '$lib/components/Form.svelte';
	import { user } from '$lib/stores/user';

	const submitInfo = 'Login';

	let username;
	let password;

	let errorState;

	const onSubmit = async () => {
		const userData = {
			username,
			password
		};

		const ip = import.meta.env.VITE_LOGIN_IP;
		const playlistIp = import.meta.env.VITE_PLAYLIST_IP;

		try {
			const res = await auth(ip, JSON.stringify(userData));

			if (!res.ok) {
				throw new Error('Could not login');
			}
			$session.user.isLogged = true;
			user.loadPlaylist(playlistIp);

			goto('/');
		} catch (error) {
			errorState = error;
		}
	};
</script>

<Form {onSubmit} {submitInfo} error={errorState}>
	<input
		type="text"
		name="username"
		placeholder="Enter your username"
		bind:value={username}
		autocomplete="off"
	/>
	<input
		type="password"
		name="username"
		placeholder="Enter your password"
		bind:value={password}
		autocomplete="off"
	/>
</Form>
