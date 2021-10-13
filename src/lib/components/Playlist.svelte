<script>
	export let playlistData;

	const handleClick = () => {
		console.log(playlistData);
	};
</script>

<div class="wrapper">
	<img src="/playlist.png" alt="test" />
	<div class="layout">
		<button on:click={handleClick}> Play </button>
		<button on:click={handleClick}> Delete </button>
	</div>
</div>

<style>
	.wrapper {
		/* padding: 1rem; */
		border-radius: 0.25rem;

		/* max-width: 12rem; */

		display: flex;
		background-color: rgba(255, 255, 255, 0.7);
	}

	img {
		width: 80px;
		/* height: 300px; */
	}

	.layout {
		padding: 1rem;
	}
</style>
