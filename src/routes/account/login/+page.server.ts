import type { Actions } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const load: PageServerLoad = (async (event) => {
	return {};
});

export const actions: Actions = {
	login: async ({ cookies, request }) => {
		const data = await request.formData();
		const email = data.get('InputEmail');
		const password = data.get('InputPassword');

		// TODO Get the user info here.
		// Cookies.set('userid', await auth.getuser());

		return { success: true };
	},
	register: async (event) => {
		// TODO register the user
	},
};