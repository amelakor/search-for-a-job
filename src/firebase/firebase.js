import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyA9wgoZLuqfCNRs42R-hQ25BlXflgVQSRw",
  authDomain: "search-console-66155.firebaseapp.com",
  databaseURL: "https://search-console-66155.firebaseio.com",
  projectId: "search-console-66155",
  storageBucket: "search-console-66155.appspot.com",
  messagingSenderId: "973914427160",
  appId: "1:973914427160:web:1847caee40ef90d617d86d",
  measurementId: "G-SMB27SPT4K",
};
// Initialize Firebase

firebase.initializeApp(firebaseConfig);

//Database;

const db = firebase.firestore();

export { db };

export default {
  firebaseConfig,
};
