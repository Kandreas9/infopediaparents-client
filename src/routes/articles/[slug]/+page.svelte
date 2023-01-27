<script>
	export let data;

	console.log(data);
</script>

<section class="post">
	<h2 class="post-title">{data.props.post.title}</h2>

	<div class="post-content">
		{@html data.props.post.html}
	</div>
</section>

<style>
</style>
