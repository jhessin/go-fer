<script lang="ts">
	import { page } from '$app/stores';
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
		href="/account"
		class="nav-link"
		class:active={$page.url.pathname === '/account'}
		aria-current={$page.url.pathname === '/account' ? 'page' : undefined}>Settings</a
	>
</nav>
