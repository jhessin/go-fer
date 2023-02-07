import { user } from '$lib/store';
import { redirect } from '@sveltejs/kit';
import { get_store_value } from 'svelte/internal';
import type { PageLoad } from './$types';

export const load: PageLoad = () => {
	// TODO: Check if the user is logged in and send them to the login screen if not.
	const loggedInUser = get_store_value(user);
	if (!loggedInUser) throw redirect(300, '/account/login');
};
