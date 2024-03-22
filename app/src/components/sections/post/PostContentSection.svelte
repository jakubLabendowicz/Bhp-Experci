<script lang="ts">
    import type { Post } from '$lib/utils/types';
	import { PortableText } from '@portabletext/svelte';
	import SectionTemplate from '../../templates/SectionTemplate.svelte';

    export let post: Post;
</script>

<SectionTemplate>
    <div class="post typography" id="post">
        <PortableText value={post.body}/>
    </div>
</SectionTemplate>

<style>
    .post {
        padding: 32px 256px;
    }

    @media (max-width: 1600px) {
        .post {
            padding: 32px 128px;
        }
    }

    @media (max-width: 1400px) {
        .post {
            padding: 32px 64px;
        }
    }

    @media (max-width: 1200px) {
        .post {
            padding: 32px 32px;
        }
    }

    @media (max-width: 1000px) {
        .post {
            padding: 32px 16px;
        }
    }

    @media (max-width: 800px) {
        .post {
            padding: 32px 0px;
        }
    }
</style>