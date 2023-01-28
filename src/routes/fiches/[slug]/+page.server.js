import GhostContentAPI from '@tryghost/content-api';
import { API_KEY, API_URI } from '$env/static/private';

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
	const api = new GhostContentAPI({
		url: API_URI,
		key: API_KEY,
		version: 'v5.0'
	});

	let slug = params.slug;

	try {
		const res = await api.posts.read({ slug }, { formats: ['html'] });

		return { props: { post: res } };
	} catch (error) {
		console.log(error);
	}
}
