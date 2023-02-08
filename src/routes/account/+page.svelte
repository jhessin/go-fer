<script lang="ts">
	import { dev } from '$app/environment';
	import { goto } from '$app/navigation';
	import { user } from '$lib/store';
	import { getAuth } from 'firebase/auth';

	const auth = getAuth();
</script>

<p>Welcome to your account page {$user?.displayName || $user?.email}</p>

<div class="w3-content w3-center">
	<div
		class="w3-card-4 w3-padding-large w3-margin-large  w3-center"
		style="width: 50%; height: 200px"
	>
		<img class="w3-circle w3-left w3-image" src={$user?.photoURL} alt="Profile pic" />
		<div class="w3-content">
			<table class="w3-table w3-hoverable" style="max-width: 50%">
				<tr>
					<td>User Name</td>
					<td>{$user?.displayName}</td>
				</tr>
				<tr>
					<td>Email</td>
					<td>{$user?.email}</td>
				</tr>
			</table>
			<hr />
			<button
				class="w3-button w3-red w3-right w3-margin-right"
				on:click={async () => {
					await auth.signOut();
					$user = null;
					goto('/');
				}}>Sign Out</button
			>
		</div>
	</div>
</div>

{#if dev}
	<pre>{JSON.stringify($user, null, 2)}</pre>
{/if}
