<script lang="ts">
    import { smoothScroll } from '$lib/utils/smoothScroll';
    export let direction: string = 'down';
    import src from '$lib/assets/scroll.svg';
</script>

<a class="icon_button" href='#main' rel="noopener noreferrer nofollow" on:click={smoothScroll}>
    <div class="icon_button__inner">
        <div class="icon_button__icon">
            {#if direction === 'down'}
                <!-- svelte-ignore a11y-img-redundant-alt -->
                <img src={src} alt="Cover image for down scroll" />
            {:else if direction === 'up'}
                <!-- svelte-ignore a11y-img-redundant-alt -->
                <img src={src} alt="Cover image for up scroll" style="transform: scaleY(-1);"/>
            {/if}
        </div>
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
        background-color: #000000;
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
        filter: invert(100%);
    }
</style>