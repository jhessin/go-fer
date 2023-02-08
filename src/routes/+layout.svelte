<script lang="ts">
	import 'w3-css/w3.css';
	import type { LayoutServerData } from './$types';
	import Header from './header.svelte';

	export let data: LayoutServerData;
</script>

<Header firebaseConfig={data.firebaseConfig} />
<div class="container">
	<slot />
</div>
