<script lang="ts">
	import { page } from '$app/stores';
	import { user } from '$lib/store';
	import { initializeApp, type FirebaseOptions } from 'firebase/app';
	import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
	export let firebaseConfig: FirebaseOptions;

	const app = initializeApp(firebaseConfig);
	const auth = getAuth(app);

	auth.onAuthStateChanged((newUser) => ($user = newUser));
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
	{#if $user}
		<a
			href="/account"
			class="w3-bar-item w3-mobile"
			class:w3-blue={$page.url.pathname.startsWith('/account')}
			aria-current={$page.url.pathname.startsWith('/account') ? 'page' : undefined}>Settings</a
		>
		<button
			class="w3-bar-item w3-right w3-mobile"
			on:click={async () => await auth.signOut().then(() => ($user = null))}>Sign Out</button
		>
	{:else}
		<button
			class="w3-bar-item w3-right w3-mobile"
			on:click={async () => await signInWithPopup(auth, new GoogleAuthProvider())}
			>Sign In with Google</button
		>
	{/if}
</nav>
