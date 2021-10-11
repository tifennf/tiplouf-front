<script>
	export let backgroundColor;
</script>

<div class="wrapper" style={`background-color: ${backgroundColor};`}>
	<slot />
</div>

<style>
	.wrapper {
		padding: 1rem;
		border-radius: 1rem;

		max-width: 12rem;
	}
</style>
