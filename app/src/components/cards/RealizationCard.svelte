<script lang="ts">
    import type { Realization } from '$lib/utils/types';
	import { PortableText } from "@portabletext/svelte";
    import { urlFor } from '$lib/utils/image';
	import CardTemplate from "../templates/CardTemplate.svelte";

    let showDetails = false;

    export let realization: Realization;
</script>

<CardTemplate>
    <div class="realization_card" on:mouseenter={()=>showDetails = true} on:mouseleave={()=>showDetails = false}>
        {#if !showDetails}
            <div class="realization_card__image">
                <img src={urlFor(realization.image).width(200).height(200).url()} alt="Cover image for {realization.name}" />
            </div>
        {:else}
            <div class="realization_card__details">
                <div class="realization_card__name typography__headline6">
                    {realization.name}
                </div>
                <div class="realization_card__description typography__body2">
                    <PortableText value={realization.description} components={{}} />
                </div>
            </div>
        {/if}
    </div>
</CardTemplate>

<style>
    .realization_card {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 200px;
        height: 200px;
        transition: all .5s ease-in-out;
    }

    .realization_card:hover {
        width: 300px;
    }

    .realization_card__image {
        width: 100%;
        height: 100%;
    }

    .realization_card__image img {
        width: 100%;
        height: 100%;
    }

    .realization_card__details {
        overflow-y: hidden;
    }

    @media (max-width: 1000px) {
        .realization_card {
            width: 100%;
        }

        .realization_card:hover {
            width: 100%;
        }
    }
</style>