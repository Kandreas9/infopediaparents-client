<script>
	import Leaflet from '$lib/leaflet.svelte';
</script>

<svelte:head>
	<title>Infopediaparents - Home</title>
	<meta
		name="description"
		content="Gergios Karydopoulos, un pédiatre collecte et rédige des fiches pour sensibiliser."
	/>
</svelte:head>

<div class="fiches-boxes">
	<a href="fiches?tag=fièvre" class="box">Mont enfant est malade</a>
	<a href="fiches?tag=proprete,sommeil" class="box"
		>Enfant normal et ses variations limites de la normale</a
	>
	<a href="fiches?tag=signes-dalerte" class="box">Les signes D'ALERTE</a>
	<a href="#" class="box disabled">Les Bons Gestes</a>
	<a href="#" class="box disabled">Mon enfant doit prendre UN MEDICAMENT</a>
	<a href="fiches?tag=alimentation" class="box">Alimentation</a>
	<a href="#" class="box disabled">Mon enfant s'est blessé</a>
	<a href="#" class="box disabled">Les gestes Qui Sauvent</a>
	<a href="#" class="box disabled">Numéros d'urgence</a>
</div>

<div class="divider div-transparent" />

<section class="hero">
	<div class="hero-text">
		<h2>Centre Médical du Littoral</h2>
		<p>600 Avenue Marcel Pagnol</p>
		<p>3440 Pérols</p>
		<div>
			<a href="tel:+33787290568">Tel: 0787290568</a>
		</div>
		<div>
			<a href="https://infopediaparents.fr">infopediaparents.fr</a>
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
	.logo {
		height: 10rem;
	}

	.hero-text {
		text-align: center;
	}

	.hero-text h2 {
		font-size: 2rem;
		margin-bottom: 1rem;
	}

	.fiches-boxes {
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 2rem;
		display: grid;
		gap: 0.5rem;
		grid-template-columns: repeat(2, 1fr);
	}

	.box:nth-child(3n + 1) {
		background-color: rgb(51, 67, 121);
	}

	.box:nth-child(3n + 3) {
		background-color: rgb(124, 144, 207);
	}

	.box:nth-child(3n + 2) {
		background-color: rgb(78, 102, 181);
	}

	.fiches-boxes .box {
		cursor: pointer;
		text-align: center;
		display: flex;
		align-items: center;
		justify-content: center;
		color: white;
		padding: 1rem;
		height: auto;
		text-decoration: none;
		transition: transform 0.2s ease-out;
	}

	.fiches-boxes .box:hover {
		transform: scale(1.2);
	}

	.disabled {
		background-color: gray !important;
		pointer-events: none;
		cursor: default;
	}

	.georgios {
		display: flex;
		align-items: center;
		flex-direction: column;
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

	@media (min-width: 600px) {
		.fiches-boxes {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media (min-width: 900px) {
		.fiches-boxes {
			grid-template-columns: repeat(3, 1fr);
		}
	}

	@media (min-width: 700px) {
		.georgios {
			flex-direction: row;
		}

		.georgios .content {
			padding-right: 4rem;
			flex: 1;
			display: flex;
			justify-content: space-between;
			align-items: center;
		}
	}
</style>
