import { redirect } from "@sveltejs/kit";
import type { PageLoad } from "./$types";

export const load: PageLoad = ((_) => {
	// TODO: Check if the user is logged in and send them to the login screen if not.
	throw redirect(300, '/account/login')
})