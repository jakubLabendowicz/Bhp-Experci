import type { ImageAsset, PortableTextBlock, Slug } from "@sanity/types";

export interface App {
	_type: 'app';
	_createdAt: string;
    logo?: ImageAsset;
    title?: string;
    slug: Slug;
    quickLinks: Link[];
    copyright: PortableTextBlock[];
}

export interface Page {
	_type: 'page';
	_createdAt: string;
    image: ImageAsset;
    title?: string;
    slug: Slug;
    description: PortableTextBlock[];
    quickLinks: Link[];
    sections?: string[];
}

export interface Link {
	_type: 'link';
	_createdAt: string;
    icon?: ImageAsset;
    name?: string;
    label?: string;
    url?: string;
}

export interface Profile {
	_type: 'profile';
	_createdAt: string;
    image: ImageAsset;
    qr: ImageAsset;
    firstName?: string;
    lastName?: string;
    position?: string;
    phone?: string;
    email?: string;
    socialMedia: Link[];
    shortBio: PortableTextBlock[];
    longBio?: PortableTextBlock[];
}

export interface Offer {
    _type: 'offer';
    _createdAt: string;
    image: ImageAsset;
    name?: string;
    description: PortableTextBlock[];
}

export interface Realization {
    _type: 'realization';
    _createdAt: string;
    image: ImageAsset;
    name?: string;
    description: PortableTextBlock[];
}

export interface Opinion {
    _type: 'opinion';
    _createdAt: string;
    image: ImageAsset;
    name?: string;
    rating: number;
    comment: PortableTextBlock[];
    date: Date;
}

export interface Post {
	_type: 'post';
	_createdAt: string;
	title?: string;
	slug: Slug;
	excerpt?: string;
	mainImage: ImageAsset;
	body: PortableTextBlock[];
}

export interface Question {
	_type: 'question';
	_createdAt: string;
	question: string;
	answer: string;
}