<script>
	import Modal from './modal.svelte';

	let navOpen = false;
	let searchOpen = false;

	const handleOpenMenu = () => {
		console.log('test');
		navOpen = true;
	};

	const handleCloseMenu = () => {
		navOpen = false;
	};

	const handleOpenSearch = () => {
		searchOpen = true;
	};

	const handleCloseSearch = () => {
		searchOpen = false;
	};
</script>

<header>
	<div class="container">
		<h1><a href="/">IPP</a></h1>

		<!-- <input type="search"> -->
		<button on:click={handleOpenSearch} class="search-container">
			<img src="/search.svg" alt="search icon" />
			<div>Search...</div>
		</button>

		{#if searchOpen}
			<Modal {handleCloseSearch} />
		{/if}

		<nav class:open={navOpen === true}>
			<a on:click={handleCloseMenu} href="/fiches">Fiches</a>

			<div class="phones-mobile">
				<div class="samu">
					<a href="tel:+3315" class="samu-phone">
						<img src="/samu.svg" alt="french samu emergency number icon" />
						<div>15</div>
					</a>
					<div>SAMU</div>
				</div>
				<div class="antipoison">
					<a href="tel:+33561777447" class="antipoison-phone">
						<img src="/samu.svg" alt="french samu emergency number icon" />
						<div>05 ...</div>
					</a>
					<div>ANTIPOISON</div>
				</div>
			</div>

			<button class="close-button" on:click={handleCloseMenu}>
				<img src="close.svg" alt="close menu icon" />
			</button>
		</nav>

		<button on:click={handleOpenMenu} class="burger-button">
			<img src="/burger.svg" alt="burger menu icon" />
		</button>

		<div class="phones">
			<div class="samu">
				<a href="tel:+3315" class="samu-phone">
					<img src="/samu.svg" alt="french samu emergency number icon" />
					<div>15</div>
				</a>
				<div>SAMU</div>
			</div>
			<div class="antipoison">
				<a href="tel:+33561777447" class="antipoison-phone">
					<img src="/samu.svg" alt="french samu emergency number icon" />
					<div>05 ...</div>
				</a>
				<div>ANTIPOISON</div>
			</div>
		</div>
	</div>
</header>

<style>
	* {
		color: white;
	}

	.phones-mobile {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 1rem;
	}

	.phones {
		display: none;
		justify-content: center;
		align-items: center;
		gap: 1rem;
	}

	header {
		background-color: #4070f4;
		padding: 1rem;
		box-shadow: 0px 2px 15px 5px rgba(0, 0, 0, 0.6);
	}

	.container {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	h1 a {
		text-decoration: none;
		font-size: 1.5rem;
	}

	.search-container {
		display: flex;
		align-items: center;
		background: none;
		padding: 0.2rem 0.5rem;
		border-radius: 1.6rem;
		border: 1px solid #6c8ff1;
	}

	.search-container img {
		height: 1.4rem;
	}

	.search-container:hover {
		animation: tilt-shaking 0.8s infinite;
	}

	nav {
		position: fixed;
		top: 0;
		/* Rip 2000 become the leaflet map has insane z-indexes */
		z-index: 2000;
		right: -100%;
		height: 100vh;
		width: 100vw;
		background-color: #4070f4;
		border-left: 1px solid #6c8ff1;
		transition: right 0.5s ease-in-out;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 2rem;
	}

	.open {
		right: 0;
	}

	.burger-button {
		background: none;
		border: none;
	}

	.burger-button img {
		height: 3rem;
	}

	.close-button {
		background: none;
		border: none;
		position: absolute;
		bottom: 1.5rem;
		right: 1.5rem;
	}

	.close-button img {
		height: 3rem;
	}

	.samu,
	.antipoison {
		text-align: center;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.antipoison > div {
		font-size: 0.7rem;
	}

	.samu img,
	.antipoison img {
		height: 2rem;
	}

	.samu-phone,
	.antipoison-phone {
		text-decoration: none;
		border-radius: 0.5rem;
		border: 1px solid #6c8ff1;
		padding: 0.2rem;
	}

	@keyframes tilt-shaking {
		0% {
			transform: translateX(0);
		}
		25% {
			transform: translateY(-4px);
		}
		35% {
			transform: translateY(-4px) rotate(10deg);
		}
		55% {
			transform: translateY(-4px) rotate(-10deg);
		}
		65% {
			transform: translateY(-4px) rotate(10deg);
		}
		75% {
			transform: translateY(-4px) rotate(-10deg);
		}
		100% {
			transform: translateY(0) rotate(0);
		}
	}

	@media (min-width: 700px) {
		.phones-mobile {
			display: none;
		}
		.phones {
			display: flex;
		}
		.burger-button {
			display: none;
		}

		.close-button {
			display: none;
		}

		nav {
			position: static;
			width: auto;
			height: auto;
			border: none;
			flex-direction: row;
		}
	}
</style>
