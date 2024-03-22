<script lang="ts">
    import type { Opinion } from '$lib/utils/types';
	import { PortableText } from "@portabletext/svelte";
    import { urlFor } from '$lib/utils/image';
	import CardTemplate from "../templates/CardTemplate.svelte";
	import { formatDate } from '$lib/utils';

    export let opinion: Opinion;

    function generateStars(rating: number) {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push({ filled: i <= rating });
        }
        return stars;
    }
</script>

<CardTemplate>
    <div class="opinion_card">
        <div class="opinion_card__header">
            <div class="opinion_card__image">
                <img src={urlFor(opinion.image).width(200).height(200).url()} alt="Cover image for {opinion.name}" />
            </div>
            <div class="opinion_card__header_right">
                <div class="opinion_card__name typography__headline6">
                    {opinion.name}
                </div>
                <div class="opinion_card__rating typography__body1">
                    {#each generateStars(opinion.rating) as { filled }, i}
                        <div class="opinion_card__star">
                            <img src={filled ? 'full_star.png' : 'empty_star.png'} alt="">
                        </div>
                    {/each}
                </div>
            </div>
        </div>
        <div class="opinion_card__comment typography__body1">
            <PortableText value={opinion.comment} />
        </div>
        <div class="opinion_card__date typography__body2">
            {formatDate(opinion.date.toString())}
        </div>
    </div>
</CardTemplate>

<style>
    .opinion_card {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        width: 250px;
    }

    .opinion_card__header {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        justify-content: flex-start;
        gap: 16px;
    }

    .opinion_card__header_right {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        gap: 8px;
        width: calc(100% - 64px - 16px);
    }

    .opinion_card__image {
        width: 64px !important;
        height: 64px !important;
    }

    .opinion_card__image img {
        width: 100%;
        height: 100%;
        border-radius: 100px;
    }

    .opinion_card__rating {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        justify-content: flex-start;
        gap: 5px;
    }

    .opinion_card__star {
        width: 20px;
        height: 20px;
    }

    .opinion_card__star img {
        width: 100%;
        height: 100%;
    }

    @media (max-width: 1000px) {
        .opinion_card {
            width: 100%;
        }
    }
</style>