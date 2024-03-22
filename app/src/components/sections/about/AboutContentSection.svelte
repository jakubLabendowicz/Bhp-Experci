<script lang="ts">
    import type { Profile } from '$lib/utils/types';
	import { PortableText } from '@portabletext/svelte';
	import SectionTemplate from '../../templates/SectionTemplate.svelte';

    export let profile: Profile;
</script>

<SectionTemplate>
    {#if profile.longBio}
        <div class="about_content_section typography" id="about_content_section">
            <PortableText value={profile.longBio}/>
        </div>
    {/if}
</SectionTemplate>

<style>
    .about_content_section {
        padding: 32px 256px;
    }

    @media (max-width: 1600px) {
        .about_content_section {
            padding: 32px 128px;
        }
    }

    @media (max-width: 1400px) {
        .about_content_section {
            padding: 32px 64px;
        }
    }

    @media (max-width: 1200px) {
        .about_content_section {
            padding: 32px 32px;
        }
    }

    @media (max-width: 1000px) {
        .about_content_section {
            padding: 32px 16px;
        }
    }

    @media (max-width: 800px) {
        .about_content_section {
            padding: 32px 0px;
        }
    }
</style>