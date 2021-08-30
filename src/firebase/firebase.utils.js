import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const config = {
    apiKey: "AIzaSyAWGtcILvLUaYHmsW5E1Dsg0YVqwN3nEh4",
    authDomain: "crwn-db-33405.firebaseapp.com",
    projectId: "crwn-db-33405",
    storageBucket: "crwn-db-33405.appspot.com",
    messagingSenderId: "296452227204",
    appId: "1:296452227204:web:4310d0138a1bbd930382d1",
    measurementId: "G-LBHVL6CNXP"
};

const app = initializeApp(config);

export const auth = getAuth();
export const firestore = getFirestore();

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => signInWithPopup(auth, provider);

export default app;