<script>
	import { onMount, onDestroy } from 'svelte';
	import { browser } from '$app/environment';
	// import 'leaflet/dist/leaflet.css';

	let mapElement;
	let map;

	onMount(async () => {
		if (browser) {
			const leaflet = await import('leaflet');

			function centerLeafletMapOnMarker(map, marker) {
				let latLngs = [marker.getLatLng()];
				let markerBounds = leaflet.latLngBounds(latLngs);
				map.fitBounds(markerBounds);
			}

			map = leaflet.map(mapElement).setView([51.505, -0.09], 13);

			leaflet
				.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
					attribution:
						'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				})
				.addTo(map);

			let marker = leaflet
				.marker([43.56131071912586, 3.9513040418714134])
				.addTo(map)
				.bindPopup('Centre Médical du Littoral')
				.openPopup();

			centerLeafletMapOnMarker(map, marker);
		}
	});

	onDestroy(async () => {
		if (map) {
			console.log('Unloading Leaflet map.');
			map.remove();
		}
	});
</script>

<svelte:head>
	<link
		rel="stylesheet"
		href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"
		integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
		crossorigin=""
	/>
</svelte:head>

<div bind:this={mapElement} />

<style>
	div {
		height: 300px;
		width: 100vw;
		margin: 2rem 0 0 0;
	}
</style>
