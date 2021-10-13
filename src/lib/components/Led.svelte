<script>
	export let greenCondition = false;
	export let message = { green: '', red: '' };
</script>

<div class="wrapper">
	<div class="led" class:green-led={greenCondition} />
	<span class="description">{greenCondition ? message.green : message.red}</span>
</div>

<style>
	.wrapper {
		display: flex;
		gap: 5px;
		/* position: absolute; */
		/* top: 4.6rem; */
	}

	.led {
		padding: 0.5rem;
		border-radius: 50%;
		border-style: double;
		border-width: 4px;
		background-color: var(--red-led);
	}

	.green-led {
		background-color: green;
	}
	.description {
		display: grid;
		place-items: center;
	}
</style>
