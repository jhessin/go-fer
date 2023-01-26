import { redirect } from "@sveltejs/kit";
const clientId = import.meta.env.VITE_CLIENT_ID
const sessionId = import.meta.env.CLIENT_ID
const ghAuthURL = `https://github.com/login/oauth/authorize?client_id=${clientId}&state=${sessionId}`

export const GET = () => {
	throw redirect(302, ghAuthURL)
}