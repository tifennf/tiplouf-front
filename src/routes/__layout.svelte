
<script>
	import "../app.css";
	import "../animation.css";
</script>

<div class="wrapper">
	<header>
		<div class="user-info">
			<div class="led" />
			<span class="description">Not logged in</span>
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
		grid-template-rows: 1fr 2fr;
		grid-template-columns: 100%;
	}

	.user-info {
		display: flex;
		gap: 5px;
		position: absolute;
		top: 4.6rem;
	}

	.led {
		background-color: var(--red-led);
		padding: 0.5rem;
		border-radius: 50%;
		border-style: double;
		border-width: 4px;
		
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
	nav {
		/* border-style: dashed; */
		border-width: 0.5px;
		border-color: rgb(61, 61, 61);
	}
	
	ul {
		padding: 0;
		margin: 0;
		list-style-type: none;
		
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		text-align: center;
		gap: 0.5rem;
	}
	
	li {
		
		/* border-radius: 59% 41% 71% 29% / 45% 58% 42% 55% ; */
		background-color: rgba(255, 255, 255, 0.7);
		transition: all 0.2s ease-in;

	}
	


	li, li:hover {
		border-radius: 59% 41% 71% 29% / 45% 58% 42% 55% ;
	}


	li:hover {
		/* transform: scale(1.1); */
		background-color: #ffffff;
	}
	
	li a {
		padding: 1.5rem 0.5rem;
		font-weight: 500;
		letter-spacing: 2px;
		font-size: 1.05rem;
		/* height: 100%; */
		display: block;
	}
	
	li a:hover {
		
		color: #ff86e5;
	}


</style>