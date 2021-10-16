<script>
	export let show = false;
	export let center = true;

	const handleClick = () => {
		show = false;
	};
</script>

{#if show}
	<div class="mask">
		<div class="wrapper" class:center>
			<section>
				<button on:click={handleClick}>×</button>
				<slot />
			</section>
		</div>
	</div>
{/if}

<style>
	.mask {
		width: 100%;
		height: 100%;
		position: absolute;

		top: 0;
		display: grid;
		place-items: center;
	}

	.wrapper {
		padding: 2rem;
		background-color: white;
	}
</style>
