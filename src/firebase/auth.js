import { signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase'


const provider = new GoogleAuthProvider()

provider.setCustomParameters({
    propmt: "select_account"
})


export const signUpWithPopup = async () => await signInWithPopup(auth, provider)

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback)