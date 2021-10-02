<script>
	import { auth } from "$lib/auth.js";

	import Form from "$components/Form.svelte";
	import isLogin from "$lib/stores/isLogin.js";
import { goto } from "$app/navigation";

	export let ip = "http://localhost:3000";

	const path = "/api/auth/login";
	const submitInfo = "Login";

	console.log(isLogin);


	let username;
	let password;

	const onSubmit = async () => {
		const userData = {
			username,
			password,
		};

		const res = await auth(`${ip}${path}`, JSON.stringify(userData));

		if (res.status === 200) {

			isLogin.update(() => true);
			goto("/");
		} else {
			console.log("Unable to login");
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


