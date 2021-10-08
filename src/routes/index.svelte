<script context="module">
	export const prerender = true;
</script>

<script>
	import Playlist from '$components/Playlist.svelte';
	import loadPlaylist from '$lib/actions/loadPlaylist';
	import { playlistStore } from '$lib/stores/user/playlistStore';
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<section use:loadPlaylist>
	{#each $playlistStore as playlistData}
		<Playlist {playlistData} />
	{/each}
</section>

<style>
</style>
