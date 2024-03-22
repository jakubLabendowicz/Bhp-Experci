import { createClient } from '@sanity/client';
import groq from 'groq';
import type { App, Offer, Opinion, Page, Post, Profile, Question, Realization } from '$lib/utils/types';

import { PUBLIC_SANITY_DATASET, PUBLIC_SANITY_PROJECT_ID } from '$env/static/public';

if (!PUBLIC_SANITY_PROJECT_ID || !PUBLIC_SANITY_DATASET) {
	throw new Error('Did you forget to run sanity init --env?');
}

export const client = createClient({
	projectId: PUBLIC_SANITY_PROJECT_ID,
	dataset: PUBLIC_SANITY_DATASET,
	useCdn: false, // `false` if you want to ensure fresh data
	apiVersion: '2023-03-20' // date of setup
});

export async function getApp(slug: string): Promise<App> {
	return await client.fetch(
		groq`
			*[_type == "app" && slug.current == $slug][0] {
				logo,
				title,
				slug,
				copyright,
				"quickLinks": quickLinks[]->{
					icon,
					name,
					label,
					url
				}
			}
		`, {
			slug
		}
	);
}

export async function getPage(slug: string): Promise<Page> {
	return await client.fetch(
		groq`
			*[_type == "page" && slug.current == $slug][0] {
				image,
				title,
				slug,
				description,
				"quickLinks": quickLinks[]->{
					icon,
					name,
					label,
					url
				},
				sections
			}
		`, {
			slug
		}
	);
}

export async function getProfile(slug: string): Promise<Profile> {
	return await client.fetch(
		groq`
			*[_type == "profile" && slug.current == $slug][0] {
				slug,
				image,
				qr,
				firstName,
				lastName,
				position,
				phone,
				email,
				"socialMedia": socialMedia[]->{
					icon,
					name,
					label,
					url
				},
				shortBio,
				longBio
			}
		`, {
			slug
		}
	);
}

export async function getOffers(): Promise<Offer[]> {
	return await client.fetch(
		groq`*[_type == "offer"] | order(_createdAt desc)`
	);
}

export async function getRealizations(): Promise<Realization[]> {
	return await client.fetch(
		groq`*[_type == "realization"] | order(_createdAt desc)`
	);
}

export async function getOpinions(): Promise<Opinion[]> {
	return await client.fetch(
		groq`*[_type == "opinion"] | order(_createdAt desc)`
	);
}

export async function getPosts(): Promise<Post[]> {
	return await client.fetch(
		groq`*[_type == "post" && defined(slug.current)] | order(_createdAt desc)`
	);
}

export async function getLastPosts(): Promise<Post[]> {
	try {
		return await client.fetch(
			groq`*[_type == "post" && defined(slug.current)] | order(_createdAt desc) [0...4]`
		);
	} catch (error) {
		console.error('Error fetching last posts:', error);
		throw error;
	}
}


export async function getPost(slug: string): Promise<Post> {
	return await client.fetch(
		groq`*[_type == "post" && slug.current == $slug][0]`, {
			slug
		}
	);
}

export async function getQuestions(): Promise<Question[]> {
	return await client.fetch(
		groq`*[_type == "question" && defined(question)] | order(_createdAt desc)`
	);
}


