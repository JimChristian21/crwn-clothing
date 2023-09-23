import { initializeApp } from 'firebase/app';
import { 
    getAuth, 
    signInWithRedirect, 
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from 'firebase/auth';
import { 
    getFirestore,
    doc,
    getDoc,
    setDoc,
    collection,
    writeBatch,
    query,
    getDocs
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

export const signInWithGoogleRedirect = () => {

    return signInWithRedirect(auth, provider);
}

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {

    if (!userAuth) return;

    const userDocRef = doc(db, 'users', userAuth.uid);
    const userSnapshot = await getDoc(userDocRef);

    if (!userSnapshot.exists()) {

        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInformation
            });
        } catch (error) {

            console.log('error creating the user', error.message);
        }
    }

    return userDocRef;
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {

    if (!email || !password) return;

    return createUserWithEmailAndPassword(auth, email, password);
}

export const signInAuthUserWithEmailAndPassword = async (email, password) => {

    if (!email || !password) return;

    return signInWithEmailAndPassword(auth, email, password);
}

export const signOutUser = async() => await signOut(auth);

export const onAuthStateChangedListener = (callback) => {

    return onAuthStateChanged(auth, callback);
}


export const addCollectionAndDocuments = async (collectionKey, objectToAdd) => {

    const collectionRef = collection(db, collectionKey);
    const batch = writeBatch(db);

    objectToAdd.forEach((object) => {
        console.log(object);
        const docRef = doc(collectionRef, object.title.toLowerCase());
        batch.set(docRef, object);
    });

    await batch.commit();

    console.log('done');
}

export const getCategoriesAndDocuments = async() => {

    const collectionRef = collection(db, 'categories');
    const q = query(collectionRef);
    
    const querySnapshot = await getDocs(q);
    const categoryMap = querySnapshot.docs.reduce((accumolator, docSnapshot) => {

        const { title, items } = docSnapshot.data();
        accumolator[title.toLowerCase()] = items;

        return accumolator;
    }, {});

    return categoryMap;
    
}
