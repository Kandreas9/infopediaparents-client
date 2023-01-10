<script>
    export let data

    console.log(data)
</script>

<section class="post">
    <h2 class="post-title">{data.props.post.title}</h2>
    
    {@html data.props.post.html}
</section>