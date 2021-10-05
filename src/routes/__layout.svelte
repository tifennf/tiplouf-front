<script>
	import '../app.css';
	import '../animation.css';

	import isLogin from '$lib/stores/isLogin.js';
</script>

<div class="wrapper">
	<header>
		<div class="user-info">
			{#if !$isLogin}
				<div class="led red-led" />
				<span class="description">Not logged in</span>
			{:else}
				<div class="led green-led" />
				<span class="description">Logged in</span>
			{/if}
		</div>
		<nav>
			<ul>
				<li class="anim-floating"><a href="/">HOME</a></li>
				<li class="anim-floating"><a href="/auth/login">Login</a></li>
				<li class="anim-floating"><a href="/auth/register">Register</a></li>
			</ul>
		</nav>
	</header>

	<main>
		<slot />
	</main>
</div>

<style>
	.wrapper {
		height: 100%;
		display: grid;
		grid-template-rows: 2fr 3fr 1fr;
		grid-template-columns: 100%;
	}

	.user-info {
		display: flex;
		gap: 5px;
		position: absolute;
		top: 4.6rem;
	}

	.led {
		padding: 0.5rem;
		border-radius: 50%;
		border-style: double;
		border-width: 4px;
	}

	.red-led {
		background-color: var(--red-led);
	}
	.green-led {
		background-color: green;
	}

	.description {
		display: grid;
		place-items: center;
	}

	header {
		position: relative;
		display: grid;
		place-items: center;
	}
	header nav {
		border-width: 0.5px;
		border-color: rgb(61, 61, 61);
	}

	ul {
		padding: 0;
		margin: 0;
		list-style-type: none;
	}

	header ul {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		text-align: center;
		gap: 0.5rem;
	}

	header li {
		/* border-radius: 59% 41% 71% 29% / 45% 58% 42% 55% ; */
		background-color: rgba(255, 255, 255, 0.7);
		transition: all 0.2s ease-in;
	}

	header li,
	header li:hover {
		border-radius: 59% 41% 71% 29% / 45% 58% 42% 55%;
	}

	header li:hover {
		/* transform: scale(1.1); */
		background-color: #ffffff;
	}

	header li a {
		padding: 1.5rem 0.5rem;
		font-weight: 500;
		letter-spacing: 2px;
		font-size: 1.05rem;
		/* height: 100%; */
		display: block;
	}

	header li a:hover {
		color: #ff86e5;
	}

	footer {
		display: grid;
		place-items: center;
		padding: 4rem;
		background-color: rgb(82, 82, 82);
	}
</style>
