import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyDcEKxupkNLSRY0bBaZ3IVmqd5be-85uDE",
    authDomain: "project71-32254.firebaseapp.com",
    projectId: "project71-32254",
    storageBucket: "project71-32254.appspot.com",
    messagingSenderId: "1050182847103",
    appId: "1:1050182847103:web:5e9a255e52b2fb8710cd4a"
  };  
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();


