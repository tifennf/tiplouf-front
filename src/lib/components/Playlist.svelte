<script>
	export let playlistData;

	const handlePlay = () => {
		console.log(playlistData);
	};

	const handleDelete = () => {};
</script>

<div class="wrapper">
	<img src="/playlist.png" alt="test" />
	<div class="layout">
		<button class="play" on:click={handlePlay}> > </button>
		<button class="delete" on:click={handleDelete}> × </button>
	</div>
</div>

<style>
	.wrapper {
		/* padding: 1rem; */
		border-radius: 0.25rem;

		max-height: 5rem;

		display: flex;
		background-color: rgba(255, 255, 255, 0.7);
	}

	img {
		width: 80px;
		height: 80px;
	}

	.layout {
		position: relative;
		padding: 1rem;
	}

	.play {
		border: none;
		background: none;

		border-radius: 50%;
		border: solid 1px;
		background-color: #fff;

		font-size: 2rem;
		width: 3rem;
		height: 3rem;
	}

	.delete {
		background: red;
		border: none;
		padding: 0;
		font-size: 2rem;
		line-height: 1.2rem;
		border-top-right-radius: 0.25rem;
		border-bottom-left-radius: 0.25rem;

		position: absolute;
		right: 0;
		top: 0;
	}
</style>
