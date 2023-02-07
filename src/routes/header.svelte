<script lang="ts">
	import { page } from '$app/stores';
</script>

<nav class="w3-bar">
	<a
		href="/"
		class="w3-bar-item w3-mobile"
		class:w3-blue={$page.url.pathname === '/'}
		aria-current={$page.url.pathname === '/' ? 'page' : undefined}>Home</a
	>
	<a
		href="/about"
		class="w3-bar-item w3-mobile"
		class:w3-blue={$page.url.pathname === '/about'}
		aria-current={$page.url.pathname === '/about' ? 'page' : undefined}>About</a
	>
	<a
		href="/account"
		class="w3-bar-item w3-mobile"
		class:w3-blue={$page.url.pathname.startsWith('/account')}
		aria-current={$page.url.pathname.startsWith('/account') ? 'page' : undefined}>Settings</a
	>
</nav>
