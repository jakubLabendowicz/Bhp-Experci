<script lang="ts">
	import FooterSection from '../../components/sections/univeral/FooterSection.svelte';
	import ToolsBarSection from '../../components/sections/univeral/ToolsBarSection.svelte';
	import type { PageData } from './$types';
	import MiniHeaderSection from '../../components/sections/univeral/MiniHeaderSection.svelte';
	import QuestionsSection from '../../components/sections/faq/QuestionsSection.svelte';

	export let data: PageData;
</script>

<div>
	<MiniHeaderSection page={data.page}/>
	<ToolsBarSection profile={data.profile} scrollDirection='down'/>
	<main id='main'>
		<QuestionsSection questions={data.questions}/>
	</main>
	<ToolsBarSection profile={data.profile} scrollDirection='up'/>
	<FooterSection app={data.app} profile={data.profile}/>
</div>


<style>
	#main {
		padding-bottom: 128px;
	}
</style>
