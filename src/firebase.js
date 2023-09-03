// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "./firebase";
import {initializeApp} from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyAV69qN_vJqzhbW_pjinDXkXAHAgzHstOc",
    authDomain: "todo-app-8.firebaseapp.com",
    projectId: "todo-app-8",
    storageBucket: "todo-app-8.appspot.com",
    messagingSenderId: "1089806903384",
    appId: "1:1089806903384:web:ca515a1171935deb85822d",
    measurementId: "G-F1V8J57VEN"
  };

  const db = firebase.database();

  const firebaseApp = initializeApp(firebaseConfig)

  export default firebaseApp