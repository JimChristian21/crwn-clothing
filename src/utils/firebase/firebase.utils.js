import { initializeApp } from 'firebase/app';
import { 
    getAuth, 
    signInWithRedirect, 
    signInWithPopup,
    GoogleAuthProvider 
} from 'firebase/auth';
import { 
    getFirestore,
    doc,
    getDoc,
    setDoc
 } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCixwRWj1bjXMJjo2ad9RQiqc-gnIUj_TQ",
    authDomain: "crwn-clothing-db-409a1.firebaseapp.com",
    projectId: "crwn-clothing-db-409a1",
    storageBucket: "crwn-clothing-db-409a1.appspot.com",
    messagingSenderId: "367033237280",
    appId: "1:367033237280:web:7a182e535fe26ed43b6145"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account'
});

export const auth = getAuth();

export const signInWithGooglePopup = () => {

    return signInWithPopup(auth, provider);
}

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {

    const userDocRef = doc(db, 'users', userAuth.uid);
    const userSnapshot = await getDoc(userDocRef);
}