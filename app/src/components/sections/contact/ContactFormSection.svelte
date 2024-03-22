<script lang="ts">
    import type { Link, Profile } from '$lib/utils/types';
	import SectionTemplate from '../../templates/SectionTemplate.svelte';
	import ContactCard from '../../cards/ContactCard.svelte';
    import Button from '../../elements/Button.svelte';

    export let profile: Profile;
</script>

<SectionTemplate>
    <div class="contact" id="contact">
        <div class="contact__title typography__headline2">
            Kontakt
        </div>
        <div class="contact__subtitle typography__headline6">
            Zapraszam do Dialogu: Skontaktuj Się ze Mną
        </div>
        <div class="contact__content">
            <ContactCard profile={profile}/>
        </div>
    </div>
</SectionTemplate>

<style>
    .contact {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;
        width: 100%;
        padding-top: 128px;
    }

    .contact__title {
        width: 100%;
        text-align: center;
    }

    .contact__subtitle {
        width: 100%;
        text-align: center;
    }

    .contact__content {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        row-gap: 32px;
        column-gap: 8px;
        width: 100%;
        padding-top: 32px;
    }

    @media (max-width: 1000px) {
        .contact__title {
            text-align: start;
        }

        .contact__subtitle {
            text-align: start;
        }
    }
</style>