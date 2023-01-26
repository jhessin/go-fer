// See https://kit.svelte.dev/docs/types#app

import type { UserConfig } from "vite";

// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			user: UserConfig
		}
		// interface PageData {}
		// interface Platform {}
	}
}

export { };

