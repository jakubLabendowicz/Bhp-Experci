import { getApp, getOffers, getPage, getPosts, getProfile, getRealizations, getOpinions, getLastPosts } from '$lib/utils/sanity';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load = (async () => {
	const app = await getApp('app');
	const page = await getPage('blog');
	const profile = await getProfile('profile');
	const offers = await getOffers();
	const realizations = await getRealizations();
	const opinions = await getOpinions();
	const posts = await getPosts();
	const lastPosts = await getLastPosts();
	
	if (app && page && profile && offers && realizations && posts && lastPosts && opinions) {
		return {
			app,
			page,
			profile,
			offers,
			realizations,
			opinions,
			posts,
			lastPosts
		};
	}

	throw error(404, 'Not found');
}) satisfies PageLoad;
