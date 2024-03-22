<script lang="ts">
    import type { Profile } from '$lib/utils/types';
	import SectionTemplate from '../../templates/SectionTemplate.svelte';
    import { PortableText } from '@portabletext/svelte';
    import { urlFor } from '$lib/utils/image';

    export let profile: Profile;
</script>

<SectionTemplate>
    <div class="about_me" id="about_me">
        <div class="about_me__image">
            <!-- svelte-ignore a11y-img-redundant-alt -->
            <img src={urlFor(profile.image).width(600).height(600).url()}  alt="Profile image" />
        </div>
        <div class="about_me__content">
            <div class="about_me__title typography__headline2">
                O mnie
            </div>
            <div class="about_me__subtitle typography__headline6">
                Ścieżka Pasji: Twórczość, Wyzwania, Cele
            </div>
            <p class="about_me__description typography__body1">
                <PortableText value={profile.shortBio} components={{}}/>
            </p>
        </div>
    </div>
</SectionTemplate>

<style>
    .about_me {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
        gap: 32px;
        width: 100%;
        padding-top: 128px;
    }

    .about_me__image {
        display: flex;
        flex-direction: row;
        justify-content: center;
        width: 600px;
        height: 100%;
    }

    .about_me__content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        width: calc(100% - 632px);
        height: 100%;
    }

    @media (max-width: 1200px) {
        .about_me__image {
            width: 100%;
        }

        .about_me__content {
            width: 100%;
        }
    }

    @media (max-width: 600px) {
        .about_me__image img {
            width: 100%;
        }
    }
</style>