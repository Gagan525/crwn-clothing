import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyCA9fD1OJMqJDhy2LczpuaBzDjPxQ6EL2g",
    authDomain: "crwn-db-3ba37.firebaseapp.com",
    projectId: "crwn-db-3ba37",
    storageBucket: "crwn-db-3ba37.appspot.com",
    messagingSenderId: "429134126369",
    appId: "1:429134126369:web:6f621a297a9e171bf3f260",
    measurementId: "G-8TLH3XZ68G"
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists){
        const {displayName, email} = userAuth;
        const createdAt = new Date();
        
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
};

firebase.initializeApp(config);

export  const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;