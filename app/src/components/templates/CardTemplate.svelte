<section class="card">
    <div class="card__inner">
        <slot/>
    </div>
</section>

<style>
    .card {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        width: var(--width, auto);
        height: auto;
        padding: 32px;
        background: var(--background, var(--theme-card-color));
        border-radius: 16px;
        transition: all .5s ease-in-out;
    }

    .card:hover {
        transform: scale(1.05);
    }

    .card__inner {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        width: var(--innerWidth, auto);
    }

    @media (max-width: 1000px) {
        .card {
            width: var(--width, 100%);
        }
    }
</style>