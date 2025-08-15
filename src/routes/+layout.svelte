<script>
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children?.()}

<footer>

</footer>

<style>
	:global(body) {
		height: 100dvh;
		margin: 0 auto;
		font-family: montserrat, sans-serif;
		background-color: #f2f0c4;
		color: #183749;
		background: url("/sts2.webp") center center no-repeat;
		background-size: cover;
	}

	:global(header) {
		background: url("https://megacrit.com/css/images/header-tear.svg") center bottom 40px no-repeat;
		background-size: cover;
		min-height: 152px;
		z-index: 1000;
	}

	footer {
		position: fixed;
		isolation: isolate;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 152px;
		z-index: 1000;
	}

	footer::before {
		content: "";
		position: absolute;
		inset: 0;
		z-index: -1;
		background: url("https://megacrit.com/css/images/header-tear.svg") center bottom 40px no-repeat;
		background-size: cover;
		transform: scaleY(-1);
	}
</style>