<script lang="ts">
	import type { Profile } from '$lib/utils/types';
	import IconButton from '../../elements/IconButton.svelte';
	import ScrollButton from '../../elements/ScrollButton.svelte';
	import SectionTemplate from '../../templates/SectionTemplate.svelte';

    export let profile: Profile;
    export let scrollDirection: string = 'down';
</script>
 
<SectionTemplate>
    <nav class="tools_bar">
        <div class="tools_bar__links">
            {#if profile.socialMedia.length}
                {#each profile.socialMedia as link}
                    <IconButton link={link} --backgroundColor="#ffffff" --color='#000000'/>
                {/each}
            {/if}
        </div>
        <ScrollButton direction={scrollDirection}/>
    </nav>
</SectionTemplate>

<style>
    .tools_bar{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        width: 100%;
        height: 48px;
        padding: 8px 0px;
    }

    .tools_bar__links {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        gap: 16px;
        height: 48px;
        width: calc(50% - 24px);
    }
</style>