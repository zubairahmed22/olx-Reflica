import firebase from "firebase"

import "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyBT3Go01w300RhonJ5o3xHCF5vBZ1lcYVg",
  authDomain: "olx-reflica.firebaseapp.com",
  databaseURL: "https://olx-reflica.firebaseio.com",
  projectId: "olx-reflica",
  storageBucket: "olx-reflica.appspot.com",
  messagingSenderId: "226371032444",
  appId: "1:226371032444:web:e4e8e64fb4554afd9ec0f9",
  measurementId: "G-MWPZPV2GXM"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  
  const db = firebaseApp.firestore();
  const  storage = firebase.storage()
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  export {auth, provider};
 export { storage}
  export  {db};
 