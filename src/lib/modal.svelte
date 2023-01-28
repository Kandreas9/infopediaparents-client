<script>
	import { goto } from '$app/navigation';

	export let handleCloseSearch;

	let searchValue = '';

	const handleSearch = () => {
		let route = `/fiches?title=${searchValue}`;
		goto(route);
		handleCloseSearch();
	};

	function init(el) {
		el.focus();
	}
</script>

<div class="modal">
	<div on:click={handleCloseSearch} class="modal-bg" />

	<form class="modal-content">
		<input
			use:init
			on:submit={handleSearch}
			bind:value={searchValue}
			type="text"
			placeholder="Search"
		/>
		<button on:click={handleSearch}>
			<img src="/search.svg" alt="search icon" />
		</button>
	</form>
</div>

<style>
	.modal {
		position: fixed;
		z-index: 2000;
		top: 0;
		left: 0;
		height: 100vh;
		width: 100vw;
		display: flex;
		justify-content: center;
		align-items: top;
	}

	.modal-bg {
		position: fixed;
		z-index: 2000;
		top: 0;
		left: 0;
		background-color: rgba(0, 0, 0, 0.8);
		height: 100vh;
		width: 100vw;
	}

	.modal-content {
		margin-top: 4rem;
		position: absolute;
		z-index: 2010;
		border-radius: 10px;
		background-color: #6f92f1;
		display: flex;
		align-items: center;
	}

	.modal-content input {
		border: none;
		border-radius: 10px;
		padding: 0.7rem;
		font-size: 1.4rem;
		background-color: #6f92f1;
		color: white;
	}

	.modal-content input::placeholder {
		color: rgb(215, 215, 215);
	}

	.modal-content button {
		position: absolute;
		right: 1rem;
		background: none;
		border: none;
	}

	.modal-content img {
		height: 2rem;
	}
</style>
