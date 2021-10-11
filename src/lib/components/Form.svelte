<script>
	export let onSubmit;
	export let submitInfo;
	export let error;
</script>

<form on:submit|preventDefault={onSubmit}>
	<header>
		<slot />
	</header>
	<input type="submit" value={`${submitInfo}`} />
	{#if error}
		<span class="error">{error}</span>
	{/if}
</form>

<style>
	form {
		display: grid;
		grid-template-rows: 2fr 1fr;
		gap: 20px;
		position: relative;
	}

	header {
		grid-column-start: 1;
		display: flex;
		flex-direction: column;
		gap: 2px;
	}

	.error {
		background-color: var(--red-led);

		text-align: center;

		font-size: 0.8rem;
		border-radius: 1rem;
		width: 100%;
		position: absolute;
		bottom: -1.5rem;
	}
</style>
