<script>
    import '../global.css'
    import Nav from '$lib/nav.svelte'
    import Footer from '$lib/footer.svelte'
</script>

<Nav />

<main>
    <div class="container">
        <slot></slot>
    </div>
</main>

<Footer />

<style>
    main {
        margin: 3rem 0;
    }

    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

</style>