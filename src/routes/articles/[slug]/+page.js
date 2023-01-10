import GhostContentAPI from '@tryghost/content-api';

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
	const api = new GhostContentAPI({
		url: 'http://localhost:8080',
		key: 'a2f6a4bf18acd8e526e9ff131e',
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
