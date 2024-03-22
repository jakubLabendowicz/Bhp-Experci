import { getApp, getOffers, getPage, getPosts, getProfile, getRealizations, getOpinions, getQuestions } from '$lib/utils/sanity';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load = (async () => {
	const app = await getApp('app');
	const page = await getPage('faq');
	const profile = await getProfile('profile');
	const questions = await getQuestions();
	
	if (app && page && profile && questions) {
		return {
			app,
			page,
			profile,
			questions
		};
	}

	throw error(404, 'Not found');
}) satisfies PageLoad;
