<script context="module">
	export const prerender = true;
</script>

<script>
	import Playlist from '$components/Playlist.svelte';
	import loadUserPlaylist from '$lib/actions/loadUserPlaylist';
	import user from '$lib/stores/user';

	const ip = 'http://localhost:3000/api/playlist';

	let userPlaylist = $user.playlist;

	// $: console.log(userPlaylist);
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<section use:loadUserPlaylist={ip}>
	{#each $user.playlist as playlistData}
		<Playlist {playlistData} />
	{/each}
</section>

<style>
</style>
