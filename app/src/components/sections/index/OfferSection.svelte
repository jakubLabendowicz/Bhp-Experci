<script lang="ts">
    import type { Offer } from '$lib/utils/types';
	import SectionTemplate from '../../templates/SectionTemplate.svelte';
	import OfferCard from '../../cards/OfferCard.svelte';

    export let offers: Offer[];
</script>

<SectionTemplate>
    <div class="offer" id="offers">
        <div class="offer__title typography__headline2">
            Oferta
        </div>
        <div class="offer__subtitle typography__headline6">
            Twoje Bezpieczeństwo, Moja Priorytetowa Oferta
        </div>
        <div class="offer__content">
            {#each offers as offer}
                <OfferCard offer={offer}/>
            {/each}
        </div>
    </div>
</SectionTemplate>

<style>
    .offer {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;
        width: 100%;
        padding-top: 128px;
    }

    .offer__title {
        width: 100%;
    }

    .offer__content {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: flex-start;
        justify-content: space-between;
        row-gap: 32px;
        column-gap: 0px;
        width: 100%;
        padding-top: 32px;
    }
</style>