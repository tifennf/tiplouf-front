<div class="wrapper"> 
	<section class="auth">
		<slot />
	</section>
</div>

<style>

	.wrapper {
		height: 100%;
		display: grid;
		place-items: start center;
		/* grid-template-rows: 1 2fr 1fr 1fr 1fr; */
	}
	
	.auth {
		/* place-self: center; */
		/* grid-row-start: 2; */
		padding: 3rem;
		border-radius: 1rem;
		background-color: rgba(255, 255, 255, 0.7);
	}
</style>
