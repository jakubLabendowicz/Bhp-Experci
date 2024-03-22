<script lang="ts">
	import { urlFor } from '$lib/utils/image';
	import type { App } from '$lib/utils/types';

	export let app: App;
</script>
 
<a href="/" class="brand">
    <div class="brand__inner">
        {#if app.logo}
            <div class="brand__icon">
                <img src={urlFor(app.logo).width(48).height(48).url()} alt="Cover image for {app.title}" />
            </div>
        {/if}
        {#if app.title}
            <div class="brand__label typography__headline6">
                {app.title}
            </div>
        {/if}
    </div>
</a>

<style>
    .brand {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        height: 48px;
        background-color: var(--backgroundColor);
        color: var(--color);
        text-decoration: none;
        transition: all .5s ease-in-out;
    }

    .brand:hover {
        transform: scale(1.05);
        cursor: pointer;
    }

    .brand__inner {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        gap: 8px;
    }

    .brand__icon {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        width: 48px;
        height: 48px;
    }

    .brand__icon img {
        width: 48px;
        height: 48px;
    }

    .brand__label {
        color: var(--color);
    }
</style>