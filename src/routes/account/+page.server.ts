import {
	FIREBASE_API_KEY,
	FIREBASE_APP_ID,
	FIREBASE_MEASUREMENT_ID,
	FIREBASE_MESSAGING_SENDER_ID,
} from '$env/static/private';
import type { PageServerLoad } from './login/$types';

const firebaseConfig = {
	apiKey: FIREBASE_API_KEY,
	authDomain: 'go-fer.firebaseapp.com',
	projectId: 'go-fer',
	storageBucket: 'go-fer.appspot.com',
	messagingSenderId: FIREBASE_MESSAGING_SENDER_ID,
	appId: FIREBASE_APP_ID,
	measurementId: FIREBASE_MEASUREMENT_ID,
};

export const load: PageServerLoad = () => {
	return { firebaseConfig };
};
