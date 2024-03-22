<script lang="ts">
    import type { Link, Question } from '$lib/utils/types';
	import SectionTemplate from '../../templates/SectionTemplate.svelte';
	import QuestionCard from '../../cards/QuestionCard.svelte';

    export let questions: Question[];
</script>

<SectionTemplate>
    <div class="questions_section" id="questions">
        {#each questions as question}
            <QuestionCard question={question}/>
        {/each}
    </div>
</SectionTemplate>

<style>
    .questions_section {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;
        width: 100%;
        gap: 32px;
        cursor: pointer;
        padding-top: 32px;
    }
</style>