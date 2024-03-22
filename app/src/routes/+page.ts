import { getApp, getOffers, getPage, getLastPosts, getProfile, getRealizations, getOpinions } from '$lib/utils/sanity';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load = (async () => {
	const app = await getApp('app');
	const page = await getPage('home');
	const profile = await getProfile('profile');
	const offers = await getOffers();
	const realizations = await getRealizations();
	const opinions = await getOpinions();
	const posts = await getLastPosts();
	
	if (app && page && profile && offers && realizations && posts && opinions) {
		return {
			app,
			page,
			profile,
			offers,
			realizations,
			opinions,
			posts
		};
	}

	throw error(404, 'Not found');
}) satisfies PageLoad;
