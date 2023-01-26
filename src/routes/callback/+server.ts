import type { RequestEvent, RequestHandler } from "./$types";

const tokenURL = 'https://github.com/login/oauth/access_token'

const clientId = import.meta.env.VITE_CLIENT_ID
const secret = import.meta.env.VITE_CLIENT_SECRET

export const GET: RequestHandler = async (req) => {
	const code = req.url.searchParams.get('code');
	const accessToken = await getAccessToken(code, req)
	req.cookies.set('sessionid', accessToken);
	// throw redirect(300, '/')
	return new Response(JSON.stringify(req.locals.user))
}

function getAccessToken(code: string | null, req: RequestEvent) {
	return req.fetch(tokenURL, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json',
		},
		body: JSON.stringify({
			client_id: clientId,
			client_secret: secret,
			code
		})
	}).then(r => r.json()).then(r => r.access_token)
}
