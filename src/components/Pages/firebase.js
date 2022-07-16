import Firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    //Cant be disclosed.
  };

// Initialize Firebase
const firebase = Firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const store = {
  users: firestore.collection('users')
}

export default firebase;
