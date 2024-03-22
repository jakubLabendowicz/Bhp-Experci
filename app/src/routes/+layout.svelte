<script lang="ts">
	import NavSection from '../components/sections/univeral/NavSection.svelte';
	import FooterSection from '../components/sections/univeral/FooterSection.svelte';
	import type { LayoutData } from './$types';

	export let data: LayoutData;
</script>

<div>
	<NavSection app={data.app} />
	<slot/>
</div>
