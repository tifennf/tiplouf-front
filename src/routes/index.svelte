<script context="module">
	export const prerender = true;
</script>

<script>
	import Playlist from '$components/Playlist.svelte';
	import loadPlaylist from '$lib/actions/loadPlaylist';
	import { user } from '$lib/stores/user';

	$: playlistStore = $user.playlist;
	$: console.log($user.playlist);
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<section use:loadPlaylist>
	{#each $user.playlist as playlistData}
		<Playlist {playlistData} />
	{/each}
</section>

<style>
</style>
