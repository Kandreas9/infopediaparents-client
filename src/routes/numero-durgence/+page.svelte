<section class="numero-header">
	<img src="/health.svg" alt="health" />
	<h2>NUMÉROS D'URGENCE</h2>
</section>

<section class="numero">
	<h2>En France</h2>
	<p>Service de secours- Ambulance (SAMU) <span style="color: var(--red-main)">15</span></p>
	<p>Centre anti-poison <span style="color: var(--red-main)">+33561777447</span></p>
</section>

<section class="numero">
	<h2>En Europe</h2>
	<p>Service de secours- Ambulance <span style="color: var(--red-main)">112</span></p>
</section>

<section class="numero">
	<h2>En Suisse</h2>
	<p>Ambulance <span style="color: var(--red-main)">144</span></p>
	<p>Centre anti-poison <span style="color: var(--red-main)">145</span></p>
</section>

<style>
	.numero-header {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;
	}
	.numero-header img {
		height: 2.5rem;
	}
	.numero-header h2 {
		color: var(--red-main);
	}

	.numero {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: 2rem;
		width: 10rem;
		text-align: center;
	}

	.numero h2 {
		font-size: 1.2rem;
	}

	.numero p {
		color: var(--gray-main);
	}
</style>
