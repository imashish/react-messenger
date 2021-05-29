import firebase from 'firebase/app';
import 'firebase/firebase-auth';

export const auth = firebase
	.initializeApp({
		apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
		authDomain: 'custom-chat-42969.firebaseapp.com',
		projectId: 'custom-chat-42969',
		storageBucket: 'custom-chat-42969.appspot.com',
		messagingSenderId: '1018001631036',
		appId: '1:1018001631036:web:3378b27ba6b32cd52fa039'
	})
	.auth();
