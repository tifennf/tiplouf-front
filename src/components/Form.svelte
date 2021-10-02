<script>
	export let onSubmit;
	export let submitInfo;
</script>

<form on:submit|preventDefault={onSubmit}>
	<header>
		<slot />
	</header>
	<input type="submit" value={`${submitInfo}`} />
</form>

<style>
	form {
		display: grid;
		grid-template-rows: 2fr 1fr;
		gap: 20px;
	}

	header {
		grid-column-start: 1;
		display: flex;
		flex-direction: column;
		gap: 2px;
	}
</style>
