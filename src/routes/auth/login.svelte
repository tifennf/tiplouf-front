<script>
	import { goto } from '$app/navigation';
	import Form from '$components/Form.svelte';
	import { init } from '$lib/stores/user';

	const submitInfo = 'Login';

	let username;
	let password;

	const onSubmit = async () => {
		const userData = {
			username,
			password
		};

		try {
			await init(userData);
			goto('/');
		} catch (error) {
			console.error(error);
		}
	};
</script>

<Form {onSubmit} {submitInfo}>
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
