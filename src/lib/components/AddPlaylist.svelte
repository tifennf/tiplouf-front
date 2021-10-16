<script>
	let tracklist = [];
	let track;
	let errorState = false;

	const onSubmit = () => {
		tracklist = [...tracklist, track];

		track = '';
	};
</script>

<div class="wrapper">
	<form on:submit|preventDefault={onSubmit}>
		<input
			type="text"
			name="track"
			placeholder="Enter your track url ( youtube )"
			bind:value={track}
			autocomplete="off"
		/>
	</form>
	{#each tracklist as track}
		<div>{track}</div>
	{/each}
</div>
