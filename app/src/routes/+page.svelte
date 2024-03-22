<script lang="ts">
	import AboutMeSection from '../components/sections/index/AboutMeSection.svelte';
	import ContactSection from '../components/sections/index/ContactSection.svelte';
	import FooterSection from '../components/sections/univeral/FooterSection.svelte';
	import HeaderSection from '../components/sections/univeral/HeaderSection.svelte';
	import OfferSection from '../components/sections/index/OfferSection.svelte';
	import OpinionsSection from '../components/sections/index/OpinionsSection.svelte';
	import LastPostsSection from '../components/sections/index/LastPostsSection.svelte';
	import RealizationsSection from '../components/sections/index/RealizationsSection.svelte';
	import ToolsBarSection from '../components/sections/univeral/ToolsBarSection.svelte';
	import type { PageData } from './$types';
	import LinkSection from '../components/sections/univeral/LinkSection.svelte';
	import type { Link } from '$lib/utils/types';

	export let data: PageData;

	let aboutLink: Link = {
        label: "Zobacz więcej",
        url: "/about"
    } as Link

	let blogLink: Link = {
        label: "Zobacz wszystkie",
        url: "/blog"
    } as Link

	let contactLink: Link = {
        label: "Napisz wiadomość",
        url: "/contact"
    } as Link
</script>

<div>
	<HeaderSection page={data.page}/>
	<ToolsBarSection profile={data.profile} scrollDirection='down'/>
	<main id='main'>
		<AboutMeSection profile={data.profile}/>
		<LinkSection link={aboutLink}/>
		<OfferSection offers={data.offers}/>
		<LastPostsSection posts={data.posts}/>
		<LinkSection link={blogLink}/>
		<RealizationsSection realizations={data.realizations}/>
		<OpinionsSection opinions={data.opinions}/>
		<ContactSection profile={data.profile}/>
		<LinkSection link={contactLink}/>
	</main>
	<ToolsBarSection profile={data.profile} scrollDirection='up'/>
	<FooterSection app={data.app} profile={data.profile}/>
</div>


<style>
	#main {
		padding-bottom: 128px;
	}
</style>
