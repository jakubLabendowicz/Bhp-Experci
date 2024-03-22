<script lang="ts">
    import type { Link, Post } from '$lib/utils/types';
	import SectionTemplate from '../../templates/SectionTemplate.svelte';
	import PostCard from '../../cards/PostCard.svelte';

    export let posts: Post[];
</script>

<SectionTemplate>
    <div class="post" id="posts">
        <!-- <div class="post__title typography__headline2">
            Wszystkie wpisy
        </div> -->
        <!-- <div class="post__subtitle typography__headline6">
            Wiedza w Praktyce: Codzienne Rozważania i Wyzwania
        </div> -->
        <div class="post__content">
            {#each posts as post}
                <PostCard post={post}/>
            {/each}
        </div>
    </div>
</SectionTemplate>

<style>
    .post {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;
        width: 100%;
    }

    /* .post__title {
        width: 100%;
    } */

    .post__content {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: flex-start;
        justify-content: space-between;
        row-gap: 32px;
        column-gap: 8px;
        width: 100%;
        padding-top: 32px;
    }
</style>