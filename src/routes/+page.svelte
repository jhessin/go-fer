<script lang="ts">
	import { user } from '$lib/store';
</script>

<header class="w3-container w3-jumbo">
	Welcome to Go-fer{$user?.displayName ? ` ${$user.displayName}` : ''}!
</header>

<p class="w3-container w3-xxlarge">
	Go-fer is a contruction material delivery app for when you need that one thing right now...
</p>

<p class="w3-container w3-xlarge">
	Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, autem quae fugiat similique nam
	facilis id inventore quos, eius dolore eos recusandae quas hic, maxime veritatis voluptatum
	quaerat earum illum?
</p>
