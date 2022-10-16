import { auth, googleAuthProvider } from '../lib/firebase'

export default function Enter({ props }) {
	const user = null
	const username = null

	return (
		<main>
			{user ? !user ? <UserNameForm /> : <SignOutButton /> : <SignInButton />}
		</main>
	)
}

function SignInButton() {
	const signInWithGoogle = async () => {
		await auth.signInWithPopup(googleAuthProvider)
	}

	return (
		<button className='btn-google' onClick={signInWithGoogle}>
			Sign in with Google
		</button>
	)
}

function SignOutButton() {
	return <button onClick={() => auth.signOut()}>Sign Out</button>
}

function UserNameForm() {}
