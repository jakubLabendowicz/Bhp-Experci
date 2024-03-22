<script lang="ts">
    import type { Realization } from '$lib/utils/types';
	import SectionTemplate from '../../templates/SectionTemplate.svelte';
	import RealizationCard from '../../cards/RealizationCard.svelte';

    export let realizations: Realization[];
</script>

<SectionTemplate>
    <div class="realization" id="realizations">
        <div class="realization__title typography__headline2">
            Realizacje
        </div>
        <div class="realization__subtitle typography__headline6">
            Portfolio Sukcesów: Krok Po Kroku do Perfekcji
        </div>
        <div class="realization__content">
            {#each realizations as realization}
                <RealizationCard realization={realization}/>
            {/each}
        </div>
    </div>
</SectionTemplate>

<style>
    .realization {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;
        width: 100%;
        padding-top: 128px;
    }

    .realization__title {
        text-align: end;
        width: 100%;
    }

    .realization__subtitle {
        text-align: end;
        width: 100%;
    }

    .realization__content {
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

    @media (max-width: 1000px) {
        .realization__title {
            text-align: start;
        }

        .realization__subtitle {
            text-align: start;
        }
    }
</style>