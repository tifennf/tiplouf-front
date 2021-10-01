<script>
	import { auth } from "$lib/auth.js";

	import Form from "$components/Form.svelte";
	import AuthLayout from "$components/AuthLayout.svelte";

	export let ip = "http://localhost:3000";

	const path = "/api/auth/login";
	const submitInfo = "Login";

	let username;
	let password;

	const onSubmit = async () => {
		const userData = {
			username,
			password,
		};

		const res = await auth(`${ip}${path}`, JSON.stringify(userData));

		if (res.status === 200) {
			username = "";
			password = "";

			console.log(res.body);
		} else {
			console.log("Unable to login");
		}
	};
</script>

<AuthLayout>
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
			placeholder="Enter your username"
			bind:value={password}
			autocomplete="off"
		/>
	</Form>
</AuthLayout>

