import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyA2m2_XQqls7P7ofRBb3CllqEh3vfbROno",
  authDomain: "secret-cosplay.firebaseapp.com",
  databaseURL: "https://secret-cosplay.firebaseio.com",
  projectId: "secret-cosplay",
  storageBucket: "secret-cosplay.appspot.com",
  messagingSenderId: "269580748770",
  appId: "1:269580748770:web:cab3d6ffe6d5210365dbbb"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;