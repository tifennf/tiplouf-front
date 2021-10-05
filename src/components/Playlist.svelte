<script>
	import Card from '$components/Card.svelte';

	export let playlistData;

	const handleClick = () => {
		console.log(playlistData);
	};
</script>

<Card backgroundColor="rgba(255, 255, 255, 0.7)">
	<button on:click={handleClick}> Play </button>
</Card>
