<script lang="ts">
	import { urlFor } from '$lib/utils/image';
	import type { Post } from '$lib/utils/types';
	import { PortableText } from '@portabletext/svelte';
	import Button from '../../elements/Button.svelte';
	import SectionTemplate from '../../templates/SectionTemplate.svelte';
	import { formatDate } from '$lib/utils';

	export let post: Post;
</script>

<SectionTemplate>
    <header class="header">
        <div class="header__title typography__headline2">
            {post.title}
        </div>
        <div class="typography__subtitle1">
            {formatDate(post._createdAt)}
        </div>
        <div class="header__description typography__headline6">
            {post.excerpt}
        </div>
        <div class="header__image">
            {#if post.mainImage}
                <img
                    src={urlFor(post.mainImage).width(1000).height(300).url()}
                    alt="Cover image for {post.title}"
                />
            {/if}
        </div>
    </header>
</SectionTemplate>

<style>
    .header {
        display: flex;
        flex-direction: column;
        gap: 32px;
        padding: 64px 256px 0px 256px;
    }

    .header__image img {
        width: 100%;
    }

    @media (max-width: 1600px) {
        .header {
            padding: 64px 128px 0px 128px;
        }
    }

    @media (max-width: 1400px) {
        .header {
            padding: 64px 64px 0px 64px;
        }
    }

    @media (max-width: 1200px) {
        .header {
            padding: 64px 32px 0px 32px;
        }
    }

    @media (max-width: 1000px) {
        .header {
            padding: 64px 16px 0px 16px;
        }
    }

    @media (max-width: 800px) {
        .header {
            padding: 64px 0px 0px 0px;
        }

        .header__title {
            font-size: 2.8rem;
        }
    }
</style>