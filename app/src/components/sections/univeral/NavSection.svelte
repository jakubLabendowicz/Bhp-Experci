<script lang="ts">
	import type { App } from '$lib/utils/types';
	import Brand from '../../elements/Brand.svelte';
	import Button from '../../elements/Button.svelte';
	import SectionTemplate from '../../templates/SectionTemplate.svelte';

	export let app: App;
</script>

<SectionTemplate>
    <nav class="nav_bar">
        <div class="nav_bar__inner">
            <div class="nav_bar__brand">
                <Brand {app} />
            </div>
            <div class="nav_bar__links">
                {#if app.quickLinks.length}
                    {#each app.quickLinks as link}
                        <Button link={link} --color="#000000" --backgroundColor='#ffffff'/>
                    {/each}
                {/if}
            </div>
        </div>
    </nav>
</SectionTemplate>

<style>
    .nav_bar {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 100;
        width: calc(100% - 256px);
        height: calc(64px - 16px);
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        padding: 8px 128px;
        background-color: var(--theme-background-color);
    }

    .nav_bar__inner {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        height: 48px;
    }

    .nav_bar__brand {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        gap: 8px;
    }

    .nav_bar__links {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        gap: 16px;
    }

    @media (max-width: 1800px) {
        .nav_bar {
            width: calc(100% - 192px);
            padding: 8px 96px;
        }
    }

    @media (max-width: 1600px) {
        .nav_bar {
            width: calc(100% - 128px);
            padding: 8px 64px;
        }
    }

    @media (max-width: 1400px) {
        .nav_bar {
            width: calc(100% - 64px);
            padding: 8px 32px;
        }
    }

    @media (max-width: 1200px) {
        .nav_bar {
            width: calc(100% - 32px);
            padding: 8px 16px;
        }
    }

    @media (max-width: 1000px) {
        .nav_bar {
            width: calc(100% - 16px);
            padding: 8px 8px;
        }
    }

    @media (max-width: 800px) {
        .nav_bar__links {
            gap: 4px;
        }
    }

    @media (max-width: 600px) {
        .nav_bar__links {
            display: none;
        }
    }
</style>