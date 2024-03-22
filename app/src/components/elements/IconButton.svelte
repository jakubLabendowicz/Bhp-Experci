<script lang="ts">
	import { urlFor } from '$lib/utils/image';
	import type { Link } from '$lib/utils/types';

	export let link: Link;
</script>
 
<a class="icon_button" href={link.url} rel="noopener noreferrer nofollow">
    <div class="icon_button__inner">
        {#if link.icon}
            <div class="icon_button__icon">
                <img src={urlFor(link.icon).width(64).height(64).url()} alt="Cover image for {link.label}" />
            </div>
        {/if}
    </div>
</a>

<style>
    .icon_button {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        width: calc(48px - 24px);
        height: calc(48px - 24px);
        padding: 12px;
        border-radius: 8px;
        background-color: var(--backgroundColor);
        color: var(--color);
        text-decoration: none;
        transition: all .1s ease-in-out;
    }

    .icon_button:hover {
        transform: scale(1.07);
    }

    .icon_button__inner {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }

    .icon_button__icon {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        width: 24px;
        height: 24px;
    }

    .icon_button__icon img {
        width: 24px;
        height: 24px;
    }
</style>