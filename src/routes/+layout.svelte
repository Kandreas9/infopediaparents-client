<script>
	import '../global.css';
	import Nav from '$lib/nav.svelte';
	import Footer from '$lib/footer.svelte';

	import '@beyonk/gdpr-cookie-consent-banner/style.css';
	import { Banner as GdprBanner } from '@beyonk/gdpr-cookie-consent-banner';

	function initAnalytics() {
		if (typeof window !== undefined && window) {
			window.dataLayer = window.dataLayer || [];
			function gtag() {
				dataLayer.push(arguments);
			}
			gtag('js', new Date());

			gtag('config', 'G-JY254ZZ6R8');
		}
	}
</script>

<GdprBanner
	cookieName="gdpr"
	description="Welcome! Please consider letting us to have your consent to store cookies"
	on:analytics={initAnalytics}
/>

<svelte:head>
	<script async src="https://www.googletagmanager.com/gtag/js"></script>
</svelte:head>

<Nav />

<main>
	<div class="container">
		<slot />
	</div>
</main>

<!-- <Footer /> -->
<style>
	main {
		margin: 3rem 0;
	}

	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
