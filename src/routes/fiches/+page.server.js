import GhostContentAPI from '@tryghost/content-api';
import { API_KEY, API_URI } from '$env/static/private';

/** @type {import('./$types').PageLoad} */
export async function load({ params, url }) {
	const api = new GhostContentAPI({
		url: API_URI,
		key: API_KEY,
		version: 'v5.0'
	});

	const title = url.searchParams.get('title');
	const tags = url.searchParams.get('tag');

	console.log(`tags:[${tags}]`);
	try {
		let res;
		if (title) {
			res = await api.posts.browse({
				limit: 10,
				filter: `title:~'${title}'`,
				include: 'tags, authors'
			});
		} else if (tags) {
			res = await api.posts.browse({
				limit: 10,
				filter: `tags:[${tags}]`,
				include: 'tags, authors'
			});
		} else {
			res = await api.posts.browse({
				limit: 10,
				include: 'tags, authors'
			});
		}

		return { props: { posts: res } };
	} catch (error) {
		console.log(error);
	}
}
