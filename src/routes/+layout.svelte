<script>
	import '../global.css';
	import Nav from '$lib/nav.svelte';
	import Footer from '$lib/footer.svelte';

	import { GoogleAnalytics } from '@beyonk/svelte-google-analytics';
	import '@beyonk/gdpr-cookie-consent-banner/dist/style.css'; // optional, you can also define your own styles
	import GdprBanner from '@beyonk/gdpr-cookie-consent-banner';

	let ga;

	function initAnalytics() {
		ga.init();
	}
</script>

<GdprBanner
	description="Welcome! Please consider letting us to have your consent to store cookies"
	on:analytics={initAnalytics}
/>

<GoogleAnalytics bind:this={ga} properties={['G-JY254ZZ6R8']} enabled={false} />

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
