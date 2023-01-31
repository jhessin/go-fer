<script lang="ts">
	enum FormMode {
		Login,
		Create
	}

	let mode: FormMode = FormMode.Login;
</script>

<nav class="nav nav-tabs nav-fill">
	<button
		on:click={() => (mode = FormMode.Login)}
		class="nav-link"
		class:active={mode === FormMode.Login}
		aria-current={mode === FormMode.Login ? 'page' : undefined}>Login</button
	>
	<button
		on:click={() => (mode = FormMode.Create)}
		class="nav-link"
		class:active={mode === FormMode.Create}
		aria-current={mode === FormMode.Create ? 'page' : undefined}>Create Account</button
	>
</nav>

{#if mode === FormMode.Login}
	<form method="POST" action="?/login">
		<div class="mb-3">
			<label for="InputEmail" class="form-label">Email address</label>
			<input type="email" class="form-control" id="Email" />
		</div>
		<div class="mb-3">
			<label for="InputPassword" class="form-label">Password</label>
			<input type="password" class="form-control" id="Password" />
		</div>
		<button type="submit" class="btn btn-primary">Submit</button>
	</form>
{:else if mode === FormMode.Create}
	<form method="POST" action="?/register">
		<div class="mb-3">
			<label for="InputEmail" class="form-label">Email address</label>
			<input type="email" class="form-control" id="Email" aria-describedby="emailHelp" />
			<div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
		</div>
		<div class="mb-3">
			<label for="InputPassword" class="form-label">Password</label>
			<input type="password" class="form-control" id="Password" />
		</div>
		<div class="mb-3">
			<label for="PasswordConfirm" class="form-label">Confirm Password</label>
			<input type="password" class="form-control" id="PasswordConfirm" />
		</div>
		<button type="submit" class="btn btn-primary">Submit</button>
	</form>
{/if}
