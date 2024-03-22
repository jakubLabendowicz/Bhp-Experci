<script lang="ts">
    import type { Post } from '$lib/utils/types';
	import { PortableText } from "@portabletext/svelte";
    import { urlFor } from '$lib/utils/image';
	import CardTemplate from "../templates/CardTemplate.svelte";
	import { formatDate } from '$lib/utils';

    let showDetails = false;

    export let post: Post;
</script>

<CardTemplate>
    <a class="post_card" href={"/blog/" + post.slug.current} on:mouseenter={()=>showDetails = true} on:mouseleave={()=>showDetails = false}>
        {#if !showDetails}
            <div class="post_card__image">
                <img src={urlFor(post.mainImage).width(600).height(400).url()} alt="Cover image for {post.title}" />
            </div>
            <div class="post_card__name typography__headline6">
                {post.title}
            </div>
            <div class="post_card__date typography__body2">
                {formatDate(post._createdAt)}
            </div>
        {:else}
            <div class="post_card__excerpt typography__body1">
                {post.excerpt}
            </div>
        {/if}
    </a>
</CardTemplate>

<style>
    .post_card {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        gap: 16px;
        width: 250px;
        height: 400px;
        text-decoration: none;
    }

    .post_card__image {
        width: 100%;
        /* height: 64px; */
    }

    .post_card__image img {
        width: 100%;
        height: 100%;
        border-radius: 8px;
    }

    .post_card__name {
        color: var(--theme-text-color);
    }

    .post_card__date {
        color: var(--theme-text-color);
    }

    .post_card__excerpt {
        color: var(--theme-text-color);
        overflow-y: auto;
    }

    /* @media (max-width: 800px) {
        .post_card {
            width: 100%;
        }
    } */
</style>