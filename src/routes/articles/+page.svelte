<script>
	export let data;
</script>

<h2 class="title">Fiches</h2>
<ul class="articles">
	{#each data.props.posts as post}
		<a href="/articles/{post.slug}">
			<li class="article">
				<img src={post.feature_image} alt="article" />
				<div>
					<div class="content">
						<h2>{post.title}</h2>
						<p>{post.excerpt}</p>
					</div>

					<div class="tags">
						{#each post.tags as tag}
							<div class="tag" style="background-color: {tag.accent_color}">{tag.name}</div>
						{/each}
					</div>
				</div>
			</li>
		</a>
	{/each}
</ul>

<style>
	.title {
		text-align: center;
		font-size: 2.5rem;
		margin-bottom: 2rem;
	}

	.articles img {
		object-fit: cover;
		width: 8rem;
		height: auto;
		max-height: 15rem;
		border-radius: 10px 0 0 10px;
	}

	.articles a {
		text-decoration: none;
		color: black;
	}

	.articles p {
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}

	.articles {
		margin: 0 1rem 0 1rem;
		display: flex;
		flex-direction: column;
		gap: 2rem;
		list-style: none;
	}

	.article {
		display: flex;
		border: 1px solid rgb(206, 206, 206);
		border-radius: 10px;
		background-color: rgb(238, 238, 238);
	}

	.content {
		width: 220px;
		padding: 1rem;
	}

	.content h2 {
		font-size: 1rem;
	}

	.content p {
		color: rgb(102, 102, 102);
	}

	.tags {
		padding: 0 1rem;
		display: flex;
		gap: 0.5rem 1rem;
		flex-wrap: wrap;
		margin-bottom: 1rem;
	}

	.tag {
		border-radius: 10px;
		padding: 0.3rem;
		font-size: 0.8rem;
		color: white;
	}

	@media (min-width: 700px) {
		.articles img {
			width: 15rem;
		}
	}

	@media (min-width: 900px) {
		.articles img {
			width: 15rem;
		}

		.article {
			width: 50rem;
		}

		.content {
			width: 500px;
			padding: 1rem;
		}

		.content h2 {
			font-size: 1.5rem;
		}
	}
</style>
