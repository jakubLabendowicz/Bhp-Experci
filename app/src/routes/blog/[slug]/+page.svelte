<script lang="ts">
	import { PortableText } from '@portabletext/svelte';
	import { formatDate } from '$lib/utils';
	import { urlFor } from '$lib/utils/image';
	import type { PageData } from './$types';
	import FooterSection from '../../../components/sections/univeral/FooterSection.svelte';
	import ToolsBarSection from '../../../components/sections/univeral/ToolsBarSection.svelte';
	import PostContentSection from '../../../components/sections/post/PostContentSection.svelte';
	import PostHeaderSection from '../../../components/sections/post/PostHeaderSection.svelte';

	export let data: PageData;
</script>

<div>
	<main id='main'>
		<PostHeaderSection post={data.post}/>
		<PostContentSection post={data.post}/>
	</main>
	<ToolsBarSection profile={data.profile} scrollDirection='up'/>
	<FooterSection app={data.app} profile={data.profile}/>
</div>