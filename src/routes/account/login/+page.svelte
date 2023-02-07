<script lang="ts">
	import { goto } from '$app/navigation';
	import { user } from '$lib/store';
	import { FirebaseError, initializeApp } from 'firebase/app';
	import {
		createUserWithEmailAndPassword,
		getAuth,
		GoogleAuthProvider,
		signInWithEmailAndPassword,
		signInWithPopup,
		signOut,
	} from 'firebase/auth';
	import type { PageServerData } from './$types';

	enum FormMode {
		Login,
		Create,
	}

	let mode: FormMode = FormMode.Login;
	export let data: PageServerData;

	const app = initializeApp(data.firebaseConfig);
	const auth = getAuth(app);

	auth.onAuthStateChanged((newUser) => ($user = newUser));

	let email: string;
	let password: string;
	let passwordConfirm: string;
	let error = '';

	async function login() {
		error = '';
		try {
			await signInWithPopup(auth, new GoogleAuthProvider());
		} catch (e) {
			error = e as string;
		}
	}

	async function loginWithEmail() {
		error = '';
		try {
			await signInWithEmailAndPassword(auth, email, password);
		} catch (e) {
			error = (e as FirebaseError).cause as string;
		}
	}

	async function createAccount() {
		error = '';
		try {
			if (password !== passwordConfirm) {
				error = 'Password Mismatch!';
				return;
			}
			await createUserWithEmailAndPassword(auth, email, password);
		} catch (e) {
			error = e as string;
		}
	}

	async function logout() {
		error = '';
		try {
			await signOut(auth);
			$user = null;
		} catch (e) {
			error = e as string;
		}
	}

	$: if ($user) goto('/account');
</script>

{#if !$user}
	<!-- The login/create nav bar -->
	<nav class="w3-bar">
		<button
			on:click={() => (mode = FormMode.Login)}
			class="w3-bar-item w3-button"
			class:w3-blue={mode === FormMode.Login}
			aria-current={mode === FormMode.Login ? 'page' : undefined}>Login</button
		>
		<button
			on:click={() => (mode = FormMode.Create)}
			class="w3-bar-item w3-button"
			class:w3-blue={mode === FormMode.Create}
			aria-current={mode === FormMode.Create ? 'page' : undefined}>Create Account</button
		>
	</nav>
	{#if mode === FormMode.Login}
		<form on:submit={loginWithEmail}>
			<label for="InputEmail" inputmode="email">Email address</label>
			<input type="email" id="Email" class="w3-input" bind:value={email} />
			<label for="InputPassword">Password</label>
			<input type="password" class="w3-input" id="Password" bind:value={password} />
			<button type="submit" class="w3-button w3-blue">Submit</button>
		</form>
	{:else if mode === FormMode.Create}
		<form on:submit={createAccount}>
			<label class="w3-tooltip" for="InputEmail"
				>Email address
				<span id="emailHelp" class="w3-text w3-red">
					<em> We'll never share your email with anyone else. </em>
				</span>
			</label>
			<input
				type="email"
				inputmode="email"
				class="w3-input w3-tooltip"
				id="Email"
				aria-describedby="emailHelp"
				bind:value={email}
			/>

			<label for="InputPassword">Password</label>
			<input type="password" class="w3-input" id="Password" bind:value={password} />

			<label for="PasswordConfirm">Confirm Password</label>
			<input type="password" class="w3-input" id="PasswordConfirm" bind:value={passwordConfirm} />

			<button type="submit" class="w3-button w3-blue">Submit</button>
		</form>
	{/if}

	<hr />
	<button class="w3-button w3-green" on:click={login}>Continue with Google</button>
{/if}

{#if error}
	<h1 class="w3-red w3-large">{error}</h1>
{/if}
