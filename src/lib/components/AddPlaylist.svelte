<script>
	import { goto } from '$app/navigation';

	import { postPlaylist } from '$lib/playlist';
	import { user } from '$lib/stores/user';

	const ip = import.meta.env.VITE_PLAYLIST_IP;

	let tracklist = [];
	let track;
	let errorState = false;

	const handleSubmit = () => {
		tracklist = [...tracklist, track];

		track = '';
	};

	const handleAdd = async () => {
		const playlist = {
			tracklist,
			tag: null
		};

		const res = await postPlaylist(ip, JSON.stringify(playlist));

		if (!res.ok) {
			errorState = new Error('Could not add playlist');
			console.log(errorState);
			return;
		}

		user.addPlaylist(playlist);

		console.log($user);
	};
</script>

<div class="wrapper">
	<form on:submit|preventDefault={handleSubmit}>
		<input
			type="text"
			name="track"
			placeholder="Enter your track url ( youtube )"
			bind:value={track}
			autocomplete="off"
		/>
		<input type="submit" value="Add track" />
	</form>
	{#each tracklist as track}
		<div>{track}</div>
	{/each}
	<button on:click={handleAdd}>New Playlist</button>
</div>
