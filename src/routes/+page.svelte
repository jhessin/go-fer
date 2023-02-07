<script lang="ts">
	import { user } from '$lib/store';
	import { initializeApp } from 'firebase/app';
	import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
	import type { PageServerData } from './$types';

	export let data: PageServerData;

	const app = initializeApp(data.firebaseConfig, 'Go-fer');
	const auth = getAuth(app);

	auth.onAuthStateChanged((newUser) => ($user = newUser));
	async function login() {
		try {
			await signInWithPopup(auth, new GoogleAuthProvider());
		} catch (error) {
			console.error(error);
		}
	}
	async function logout() {
		try {
			await signOut(auth);
		} catch (error) {
			console.error(error);
		}
	}
</script>

<h1 class="display-3">Welcome to Go-fer!</h1>

<p class="lead">
	Go-fer is a contruction material delivery app for when you need that one thing right now...
</p>

{#if !$user}
	<button on:click={() => login()}>Sign In</button>
{:else}
	<p>Welcome {$user.displayName}!</p>
	<button on:click={() => logout()}>Sign Out</button>
{/if}

<p>
	Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, autem quae fugiat similique nam
	facilis id inventore quos, eius dolore eos recusandae quas hic, maxime veritatis voluptatum
	quaerat earum illum?
</p>
