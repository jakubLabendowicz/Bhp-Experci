<script lang="ts">
    import type { Opinion } from '$lib/utils/types';
	import SectionTemplate from '../../templates/SectionTemplate.svelte';
	import OpinionCard from '../../cards/OpinionCard.svelte';

    export let opinions: Opinion[];
</script>

<SectionTemplate>
    <div class="opinion" id="opinions">
        <div class="opinion__title typography__headline2">
            Opinie
        </div>
        <div class="opinion__subtitle typography__headline6">
            Własnymi Słowami: Co Klienci Mówią o Mojej Pracy
        </div>
        <div class="opinion__content">
            {#each opinions as opinion}
                <OpinionCard opinion={opinion}/>
            {/each}
        </div>
    </div>
</SectionTemplate>

<style>
    .opinion {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;
        width: 100%;
        padding-top: 128px;
    }

    .opinion__title {
        width: 100%;
    }

    .opinion__content {
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