<section class="section">
    <div class="section__inner">
        <slot/>
    </div>
</section>

<style>
    .section {
        width: calc(100% - 256px);
        height: auto;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        padding: 0px 128px;
        background-color: var(--backgroundColor);
    }

    .section__inner {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: auto;
    }

    @media (max-width: 1800px) {
        .section {
            width: calc(100% - 192px);
            padding: 0px 96px;
        }
    }

    @media (max-width: 1600px) {
        .section {
            width: calc(100% - 128px);
            padding: 0px 64px;
        }
    }

    @media (max-width: 1400px) {
        .section {
            width: calc(100% - 64px);
            padding: 0px 32px;
        }
    }

    @media (max-width: 1200px) {
        .section {
            width: calc(100% - 32px);
            padding: 0px 16px;
        }
    }

    @media (max-width: 1000px) {
        .section {
            width: calc(100% - 16px);
            padding: 0px 8px;
        }
    }
</style>