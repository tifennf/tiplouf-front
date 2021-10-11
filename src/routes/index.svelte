<script context="module">
	export const prerender = true;
</script>

<script>
	import Playlist from '$lib/components/Playlist.svelte';
	import { user } from '$lib/stores/user';

	$: playlist = $user;
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<section>
	{#each playlist as playlistData}
		<Playlist {playlistData} />
	{/each}
</section>

<style>
	section {
		display: flex;
	}
</style>
