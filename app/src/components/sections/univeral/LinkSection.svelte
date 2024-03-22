<script lang="ts">
    import type { Link } from '$lib/utils/types';
	import SectionTemplate from '../../templates/SectionTemplate.svelte';
    import Button from '../../elements/Button.svelte';

    export let link: Link;
</script>

<SectionTemplate>
    <div class="link_section" id="link">
        <Button link={link} --backgroundColor="#E15219" --color='#ffffff'/>
    </div>
</SectionTemplate>

<style>
    .link_section {
        display: flex;
        flex-direction: row;
        justify-content: center;
        width: 100%;
        padding-top: 32px;
    }
</style>