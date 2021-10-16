<script context="module">
	export const prerender = true;
</script>

<script>
	import { session } from '$app/stores';

	import AddPlaylist from '$lib/components/AddPlaylist.svelte';
	import Modal from '$lib/components/Modal.svelte';
	import Playlist from '$lib/components/Playlist.svelte';
	import { user } from '$lib/stores/user';

	let isOpen = false;
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<section>
	<Modal bind:show={isOpen}>
		<AddPlaylist />
	</Modal>
	<div class="wrapper">
		{#each $user as playlistData}
			<Playlist {playlistData} />
		{/each}
	</div>
	{#if $session.user.isLogged}
		<button class="add" on:click={() => (isOpen = true)}> Add Playlist </button>
	{/if}
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

		justify-content: center;

		padding: 1rem;
	}

	.add {
		grid-row-start: 2;
		place-self: center;
	}
</style>
