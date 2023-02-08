<script lang="ts">
	import { dev } from '$app/environment';
	import { goto } from '$app/navigation';
	import { user } from '$lib/store';
	import { getAuth } from 'firebase/auth';

	const auth = getAuth();
</script>

<p>Welcome to your account page {$user?.displayName || $user?.email}</p>

<div class="w3-card">
	<img src={$user?.photoURL} alt="Profile pic" />
	<label for="email">Email</label>
	<h3 class="w3-container w3-center">{$user?.email}</h3>
	<button
		class="w3-button w3-red w3-center w3-block"
		on:click={async () => {
			await auth.signOut();
			$user = null;
			goto('/');
		}}>Sign Out</button
	>
</div>

{#if dev}
	<pre>{JSON.stringify($user, null, 2)}</pre>
{/if}
