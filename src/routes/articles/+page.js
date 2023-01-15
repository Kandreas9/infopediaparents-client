import GhostContentAPI from '@tryghost/content-api';

/** @type {import('./$types').PageLoad} */
export async function load({ params, url }) {
	const api = new GhostContentAPI({
		url: 'http://localhost:8080',
		key: 'a2f6a4bf18acd8e526e9ff131e',
		version: 'v5.0'
	});

	const title = url.searchParams.get('title');

	try {
		let res;
		if (title) {
			res = await api.posts.browse({
				limit: 5,
				filter: `title:~'${title}'`,
				include: 'tags, authors'
			});
		} else {
			res = await api.posts.browse({
				limit: 5,
				include: 'tags, authors'
			});
		}

		return { props: { posts: res } };
	} catch (error) {
		console.log(error);
	}
}
