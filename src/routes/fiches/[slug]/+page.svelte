<script>
	export let data;

	console.log(data);
</script>

<svelte:head>
	<title>Infopediaparents - {data.props.post.title}</title>
	<meta name="description" content={data.props.post.excerpt} />
</svelte:head>

<section class="post">
	<h2 class="post-title">{data.props.post.title}</h2>

	<div class="post-content">
		{@html data.props.post.html}
	</div>
</section>

<style>
</style>
