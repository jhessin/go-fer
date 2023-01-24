<script lang="ts">
	import { page } from '$app/stores';
	import './styles.css';
</script>

<nav class="nav nav-tabs nav-fill">
	<a
		href="/"
		class="nav-link"
		class:active={$page.url.pathname === '/'}
		aria-current={$page.url.pathname === '/' ? 'page' : undefined}>Home</a
	>
	<a
		href="/about"
		class="nav-link"
		class:active={$page.url.pathname === '/about'}
		aria-current={$page.url.pathname === '/about' ? 'page' : undefined}>About</a
	>
	<a
		href="/settings"
		class="nav-link"
		class:active={$page.url.pathname === '/settings'}
		aria-current={$page.url.pathname === '/settings' ? 'page' : undefined}>Settings</a
	>
	<a
		href="/blog/hello-world"
		class="nav-link"
		class:active={$page.url.pathname === '/blog/hello-world'}
		aria-current={$page.url.pathname === '/blog/hello-world' ? 'page' : undefined}>Hello World</a
	>
</nav>

<div class="container">
	<slot />
</div>
