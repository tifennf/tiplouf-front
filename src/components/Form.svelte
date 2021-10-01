<script>
	export let onSubmit;
	export let submitInfo;
</script>

<form on:submit|preventDefault={onSubmit}>
	<slot />
	<input type="submit" value={`${submitInfo}`} />
</form>

<style>
	form {
		display: flex;
		flex-direction: column;
		max-width: 50%;
	}
</style>