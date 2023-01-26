import { type Handle, type RequestEvent } from "@sveltejs/kit";
const clientId = import.meta.env.VITE_CLIENT_ID
const sessionId = import.meta.env.CLIENT_ID
const ghAuthURL = `https://github.com/login/oauth/authorize?client_id=${clientId}&state=${sessionId}`

export const handle: Handle = async ({ event, resolve }) => {
	event.locals.user = await getUser(event.cookies.get('sessionid'), event)

	const response = await resolve(event);
	return response;
}

const userURL = 'https://api.github.com/user'

function getUser(access_token: string | undefined, req: RequestEvent) {
	// if (!access_token)
	// 	throw redirect(302, ghAuthURL)
	return req.fetch(userURL, {
		headers: {
			Accept: 'application/json',
			Authorization: `Bearer ${access_token}`
		}
	}).then(r => r.json())
}