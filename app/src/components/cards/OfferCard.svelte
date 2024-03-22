<script lang="ts">
    import type { Offer } from '$lib/utils/types';
	import { PortableText } from "@portabletext/svelte";
    import { urlFor } from '$lib/utils/image';
	import CardTemplate from "../templates/CardTemplate.svelte";

    export let offer: Offer;
</script>

<CardTemplate>
    <div class="offer_card">
        <div class="offer_card__image">
            <img src={urlFor(offer.image).width(200).height(200).url()} alt="Cover image for {offer.name}" />
        </div>
        <div class="offer_card__name typography__headline5">
            {offer.name}
        </div>
        <div class="offer_card__description typography__body1">
            <PortableText value={offer.description} components={{}}/>
        </div>
    </div>
</CardTemplate>

<style>
    .offer_card {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 400px;
        height: 100%;
    }

    .offer_card__image {
        width: 150px;
        height: 150px;
    }

    .offer_card__image img {
        width: 100%;
        height: 100%;
    }

    .offer_card__name {
        width: 100%;
        margin-top: 32px;
    }

    .offer_card__description {
        margin-top: 16px;
    }

    @media (max-width: 1000px) {
        .offer_card {
            width: 100%;
        }
    }
</style>