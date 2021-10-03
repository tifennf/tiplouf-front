<script context="module">
	export const prerender = true;
</script>

<script>
	import Playlist from '$components/Playlist.svelte';
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<section>
	<Playlist />
</section>

<style>
</style>
