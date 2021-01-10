import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyAD_wn9-pw2yfLpnCJL-N8Hz3dqWOpzeDY",
  authDomain: "crwndb-eba06.firebaseapp.com",
  projectId: "crwndb-eba06",
  storageBucket: "crwndb-eba06.appspot.com",
  messagingSenderId: "135170383898",
  appId: "1:135170383898:web:f0b839d62945ef8a4e71a3"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;