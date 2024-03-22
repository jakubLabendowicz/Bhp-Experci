<script lang="ts">
	import { urlFor } from '$lib/utils/image';
	import type { Page } from '$lib/utils/types';
	import { PortableText } from '@portabletext/svelte';
	import Button from '../../elements/Button.svelte';
	import SectionTemplate from '../../templates/SectionTemplate.svelte';

	export let page: Page;
</script>

<SectionTemplate>
    <header class="header" style="background-image: url({urlFor(page.image)?.width(2000).height(2000).url()});">
        <div class="header__content">
            <div class="header__title typography__headline1">
                {page.title}
            </div>
            <p class="header__description typography__headline6">
                {page.description}
            </p>
            <div class="header__links">
                {#if page.quickLinks.length}
                    {#each page.quickLinks as link}
                        <Button link={link} --backgroundColor="#E15219" --color='#ffffff'/>
                    {/each}
                {/if}
            </div>
        </div>
        <!-- <div class="header__image">
            {#if page.image}
                <img
                    src={urlFor(page.image).width(300).height(300).url()}
                    alt="Cover image for {page.title}"
                />
            {/if}
        </div> -->
    </header>
</SectionTemplate>

<style>
    .header {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        /* min-height: calc(100vh - 128px); */
        height: auto;
        border-radius: 16px;
        padding: 32px;
        min-height: calc(100vh - 128px - 64px);
        width: calc(100% - 64px);
        background-position: center;
        background-size:cover;
    }

    .header__content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        width: calc(100% - 300px);
    }

    .header__title {
        color: #ffffff;
    }

    .header__description {
        width: 45%;
        color: #ffffff;
    }

    .header__links {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        width: 100%;
        height: auto;
        margin-top: 32px;
        gap: 32px;
    }

    /* .header__image {
        display: flex;
        flex-direction: row;
        justify-content: center;
        width: 300px;
    } */

    @media (max-width: 1000px) {
        .header {
            flex-direction: column-reverse;
            justify-content: center;
            align-items: flex-start;
        }

        .header__content {
            width: 100%;
        }

        .header__title {
            width: 100%;
            font-size: 4.5rem;
        }

        .header__description {
            width: 100%;
            margin: 0rem;
        }

        .header__links {
            margin-top: 0px;
        }

        /* .header__image {
            width: 100%;
        } */
    }
</style>