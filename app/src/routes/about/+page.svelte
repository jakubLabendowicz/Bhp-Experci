<script lang="ts">
	import AboutMeSection from '../../components/sections/index/AboutMeSection.svelte';
	import ContactSection from '../../components/sections/index/ContactSection.svelte';
	import FooterSection from '../../components/sections/univeral/FooterSection.svelte';
	import HeaderSection from '../../components/sections/univeral/HeaderSection.svelte';
	import OfferSection from '../../components/sections/index/OfferSection.svelte';
	import OpinionsSection from '../../components/sections/index/OpinionsSection.svelte';
	import PostsSection from '../../components/sections/blog/PostsSection.svelte';
	import RealizationsSection from '../../components/sections/index/RealizationsSection.svelte';
	import ToolsBarSection from '../../components/sections/univeral/ToolsBarSection.svelte';
	import type { PageData } from './$types';
	import MiniHeaderSection from '../../components/sections/univeral/MiniHeaderSection.svelte';
	import AboutContentSection from '../../components/sections/about/AboutContentSection.svelte';

	export let data: PageData;
</script>

<div>
	<MiniHeaderSection page={data.page}/>
	<ToolsBarSection profile={data.profile} scrollDirection='down'/>
	<main id='main'>
		<AboutContentSection profile={data.profile}/>
	</main>
	<ToolsBarSection profile={data.profile} scrollDirection='up'/>
	<FooterSection app={data.app} profile={data.profile}/>
</div>


<style>
	#main {
		padding-bottom: 128px;
	}
</style>
