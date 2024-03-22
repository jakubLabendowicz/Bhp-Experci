<script lang="ts">
    import type { Post, Question } from '$lib/utils/types';
	import { PortableText } from "@portabletext/svelte";
    import { urlFor } from '$lib/utils/image';
	import CardTemplate from "../templates/CardTemplate.svelte";
	import { formatDate } from '$lib/utils';

    let showDetails = false;

    export let question: Question;
</script>

<CardTemplate --width="calc(100% - 64px)" --innerWidth="100%">
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class="question_card" on:click={()=>showDetails = !showDetails}>
        <div class="question_card__question typography__headline6">
            {question.question}
        </div>
        {#if showDetails}
            <div class="question_card__answer typography__body1">
                {question.answer}
            </div>
        {/if}
    </div>
</CardTemplate>

<style>
    .question_card {
        display: flex;
        flex-direction: column;
        /* justify-content: space-between; */
        align-items: flex-start;
        gap: 16px;
        width: 100%;
    }
</style>