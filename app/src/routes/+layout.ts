import { getApp } from '$lib/utils/sanity';
import { error } from '@sveltejs/kit';
import type { LayoutLoad } from './$types';

export const load = (async () => {
	const app = await getApp('app');

	if (!app) throw error(404, 'App not found');
	
    return { 
		app 
	};

}) satisfies LayoutLoad;
