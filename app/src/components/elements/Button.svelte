<script lang="ts">
	import { urlFor } from '$lib/utils/image';
	import type { Link } from '$lib/utils/types';
    import { smoothScroll } from '$lib/utils/smoothScroll';

	export let link: Link;
</script>
 
<a class="button" href={link.url} rel="noopener noreferrer nofollow" on:click={smoothScroll}>
    <div class="button__inner">
        {#if link.icon}
            <div class="button__icon">
                <img src={urlFor(link.icon).width(64).height(64).url()} alt="Cover image for {link.label}" />
            </div>
        {/if}
        {#if link.label}
            <div class="button__label typography__button">
                    {link.label}
            </div>
        {/if}
    </div>
</a>

<style>
    .button {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        width: auto;
        height: calc(48px - 32px);
        padding: 16px;
        border-radius: 8px;
        background-color: var(--backgroundColor);
        color: var(--color);
        text-decoration: none;
        transition: all .1s ease-in-out;
    }

    .button:hover {
        transform: scale(1.07);
    }

    .button__inner {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }

    .button__icon {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        width: 24px;
        height: 24px;
    }

    .button__icon img {
        width: 24px;
        height: 24px;
    }
</style>