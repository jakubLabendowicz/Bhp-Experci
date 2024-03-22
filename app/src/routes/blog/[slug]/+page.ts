import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { getPost, getProfile } from '$lib/utils/sanity';

export const ssr = false;

export const load = (async ({ params }) => {
	const profile = await getProfile('profile');
	const post = await getPost(params.slug);
	if (profile && post) {
		return {
			profile,
			post
		};
	}

	throw error(404, 'Not found');
}) satisfies PageLoad;
