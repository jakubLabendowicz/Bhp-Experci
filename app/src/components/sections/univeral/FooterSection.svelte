<script lang="ts">
	import { urlFor } from '$lib/utils/image';
	import type { App, Profile } from '$lib/utils/types';
	import { PortableText } from '@portabletext/svelte';
	import Brand from '../../elements/Brand.svelte';
	import SectionTemplate from '../../templates/SectionTemplate.svelte';
	import { smoothScroll } from '$lib/utils/smoothScroll';

	export let app: App;
	export let profile: Profile;
</script>
 
<SectionTemplate --backgroundColor='#f5f7fa'>
	<footer class="footer">
		<div class="footer__brand">
			<Brand app={app} --color='#000000' />
			<div class="footer__copyrigth typography__body2">
				<PortableText value={app.copyright} />
			</div>
		</div>
		<div class="footer__links">
			<div class="footer__links_colum">
				<div class="footer__links_colum_title typography__headline5">
					Przejdź do
				</div>
				{#each app.quickLinks as link}
					<a class="footer__links_colum_link typography__body2" href={link.url} on:click={smoothScroll}>
						{link.label}
					</a>
				{/each}
			</div>
			<div class="footer__links_colum">
				<div class="footer__links_colum_title typography__headline5">
					Social media
				</div>
				{#each profile.socialMedia as link}
					<a class="footer__links_colum_link typography__body2" href={link.url} on:click={smoothScroll}>
						{link.label}
					</a>
				{/each}
			</div>
		</div>
		<!-- <div class="footer__made_by">

		</div> -->
	</footer>
</SectionTemplate>

<style>
    .footer {
		width: 100%;
		height: calc(500px - 256px);
		display: flex;
		flex-direction: row;
		align-items: flex-start;
		justify-content: space-between;
		padding: 128px 0px;
		background-color: var(--theme-card-color);
		color: var(--theme-text-color);
	}

	.footer__brand {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: space-between;
		gap: 16px;
		height: 100%;
	}

	.footer__copyrigth {
		color: var(--theme-text-color);
	}

	.footer__links {
		display: flex;
		flex-direction: row;
		align-items: flex-start;
		justify-content: flex-start;
		gap: 128px;
		height: 100%;
	}

	.footer__links_colum {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: flex-start;
		gap: 16px;
		height: 100%;
	}

	.footer__links_colum_title {
		color: var(--theme-text-color);
	}

	.footer__links_colum_link {
		color: var(--theme-text-color);
		text-decoration: none;
		transition: all .1s ease-in-out;
	}

	.footer__links_colum_link:hover {
        transform: scale(1.07);
    }

	@media (max-width: 1000px) {
        .footer {
            height: auto;
			flex-direction: column;
			align-items: center;
			gap: 64px;
			text-align: center;
        }

		.footer__brand {
			flex-direction: column;
			align-items: center;
		}

		.footer__copyrigth {
			text-align: center;
			text-align: center;
		}

        .footer__links {
            flex-direction: column;
			align-items: center;
			gap: 64px;
			text-align: center;
        }

		.footer__links_colum {
			flex-direction: column;
			align-items: center;
			text-align: center;
		}
    }
</style>