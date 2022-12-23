<script>
    import Leaflet from '$lib/leaflet.svelte'
</script>

<main>
    <div class="container">
        <section class="hero">
            <div class="hero-text">
                <h2>Centre Médical du Littoral</h2>
                <p>600 Avenue Marcel Pagnol</p>
                <p>3440 Pérols</p>
                <a href="tel:+33787290568">Tel: 0787290568</a>
            </div>
            
            <Leaflet />
        </section>
    </div>
</main>


<style>

    main {
        margin: 3rem 0;
    }

    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .hero-text {
        text-align: center;
    }

    .hero-text h2 {
        font-size: 2rem;
        margin-bottom: 1rem;
    }
</style>