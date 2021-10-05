<script>
	export let show = false;
	export let center = true;

	const handleClick = () => {
		show = false;
	};
</script>

{#if show}
	<div class="wrapper" class:center>
		<section>
			<button on:click={handleClick}>×</button>
			<slot />
		</section>
	</div>
{/if}

<style>
	.wrapper {
		padding: 2rem;
		background-color: aqua;
	}

	.center {
		position: absolute;
		top: 50%;
		right: 50%;
		left: -50%;
		bottom: -50%;
	}
</style>
