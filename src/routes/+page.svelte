<script>
	import Leaflet from '$lib/leaflet.svelte';
</script>

<section class="hero">
	<div class="hero-text">
		<h2>Centre Médical du Littoral</h2>
		<p>600 Avenue Marcel Pagnol</p>
		<p>3440 Pérols</p>
		<div>
			<a href="tel:+33787290568">Tel: 0787290568</a>
		</div>
		<div>
			<a href="infopediaparens.fr">infopediaparens.fr</a>
		</div>
	</div>

	<Leaflet />
</section>

<div class="divider div-transparent" />

<section class="georgios">
	<img class="georgios-img" src="/georgios.JPG" alt="Georgios Karydopoulos" />

	<div class="content">
		<div>
			<h2>Dr. Georgios Karydopoulos</h2>
			<p>Pédiatre</p>
		</div>

		<a
			target="_blank"
			rel="noopener noreferrer"
			href="https://www.doctolib.fr/pediatre/perols/georgios-karydopoulos"
			><img class="doctolib-img" src="/doctolib.png" alt="doctolib icon" /></a
		>
	</div>
</section>

<div class="divider div-transparent" />

<style>
	.hero-text {
		text-align: center;
	}

	.hero-text h2 {
		font-size: 2rem;
		margin-bottom: 1rem;
	}

	.georgios {
		display: flex;
		align-items: center;
		gap: 2rem;
		width: 100%;
	}

	.doctolib-img {
		margin: 1rem 0;
		height: 5rem;
	}

	.georgios-img {
		height: 20rem;
		border-radius: 10px;
	}

	@media (min-width: 700px) {
		.georgios .content {
			padding-right: 4rem;
			flex: 1;
			display: flex;
			justify-content: space-between;
			align-items: center;
		}
	}
</style>
