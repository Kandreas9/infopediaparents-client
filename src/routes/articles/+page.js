import GhostContentAPI from '@tryghost/content-api';

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
	const api = new GhostContentAPI({
		url: 'http://localhost:8080',
		key: 'a2f6a4bf18acd8e526e9ff131e',
		version: 'v5.0'
	});

	try {
		const res = await api.posts.browse({ limit: 5, include: 'tags, authors' });

		return { props: { posts: res } };
	} catch (error) {
		console.log(error);
	}
}
