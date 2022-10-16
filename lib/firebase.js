import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
	apiKey: 'AIzaSyAeMdNxfUyf4Ejz55gVztXGAX75Faift-I',
	authDomain: 'firepost-ab955.firebaseapp.com',
	projectId: 'firepost-ab955',
	storageBucket: 'firepost-ab955.appspot.com',
	messagingSenderId: '483628198950',
	appId: '1:483628198950:web:0507858c0384d698be4ae7',
}

if (!firebase.apps.length) {
	firebase.initializeApp(firebaseConfig)
}

export const auth = firebase.auth()
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

export const firestore = firebase.firestore()
export const storage = firebase.storage()
