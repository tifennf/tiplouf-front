<script context="module">
	export const prerender = true;
</script>

<script>
	import Playlist from '$lib/components/Playlist.svelte';
	import { user } from '$lib/stores/user';
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<section>
	<div class="wrapper">
		{#each $user as playlistData}
			<Playlist {playlistData} />
		{/each}
	</div>
	<button class="add"> Add Playlist </button>
</section>

<style>
	section {
		height: 100%;
		display: grid;
		grid-template-rows: 90% 10%;
	}

	.wrapper {
		display: flex;
		gap: 1rem;
	}

	.add {
		grid-row-start: 2;
		place-self: end;
	}
</style>
