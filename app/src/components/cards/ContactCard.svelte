<script lang="ts">
    import type { Profile } from '$lib/utils/types';
	import { PortableText } from "@portabletext/svelte";
    import { urlFor } from '$lib/utils/image';
	import CardTemplate from "../templates/CardTemplate.svelte";

    export let profile: Profile;
</script>

<CardTemplate >
    <div class="contact_card">
        <div class="contact_card__details">
            <div class="contact_card__field typography__headline3">
                {profile.firstName} {profile.lastName}
            </div>
            <div class="contact_card__field typography__body1">
                {profile.position}
            </div>
            <div class="contact_card__field typography__body1">
                {profile.phone}
            </div>
            <div class="contact_card__field typography__body1">
                {profile.email}
            </div>
        </div>
        <div class="contact_card__image">
            <img src={urlFor(profile.qr).width(300).height(300).url()} alt="Contact qr code" />
        </div>
    </div>
</CardTemplate>

<style>
    .contact_card {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        width: 1000px;
    }

    .contact_card__details {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 16px;
    }

    .contact_card__field {
        width: 100%;
    }

    .contact_card__image {
        width: 250px;
        height: 250px;
    }

    .contact_card__image img {
        width: 250px;
        height: 250px;
    }

    

    @media (max-width: 1000px) {
        .contact_card {
            width: 100%;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
    }
</style>