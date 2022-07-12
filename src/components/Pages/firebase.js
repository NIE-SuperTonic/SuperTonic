import Firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCoEgMv9At61eEkhwJzDwCqGsABo31yG4o",
    authDomain: "alaap-a796c.firebaseapp.com",
    projectId: "alaap-a796c",
    storageBucket: "alaap-a796c.appspot.com",
    messagingSenderId: "426055283375",
    appId: "1:426055283375:web:87088c46578d199b2f5a5a",
    measurementId: "G-1WBQ5MY670"
  };

// Initialize Firebase
const firebase = Firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const store = {
  users: firestore.collection('users')
}

export default firebase;