<script>
	import Card from '$components/Card.svelte';
	import { getAllPlaylist } from '$lib/playlist';

	export let ip = 'http://localhost:3000';

	const path = '/api/playlist';

	const onClick = async () => {
		const res = await getAllPlaylist(`${ip}${path}`);

		const data = await res.json();

		console.log(data);
	};
</script>

<Card backgroundColor="rgba(255, 255, 255, 0.7)">
	<button on:click={onClick}> Play </button>
</Card>
