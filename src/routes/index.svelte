<script context="module">
	export const prerender = true;
</script>

<script>
	import Playlist from '$lib/components/Playlist.svelte';
	import { user } from '$lib/stores/user';

	$: console.log($user);
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<section>
	{#each $user as playlistData}
		<p>{playlistData}</p>
	{/each}
</section>

<style>
	section {
		display: flex;
	}
</style>
