import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBSGzWAE1oo28btilI6VWiGormC-UvgMC8",
    authDomain: "authentication-8037d.firebaseapp.com",
    databaseURL: "https://authentication-8037d-default-rtdb.firebaseio.com",
    projectId: "authentication-8037d",
    storageBucket: "authentication-8037d.appspot.com",
    messagingSenderId: "84310856969",
    appId: "1:84310856969:web:020d97932667d849b2efd8"
  };
  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);

export const auth =app.auth();
export const db = app.firestore();

// updating firestore settings

db.settings({timetampsInSnapshots: true})

export default app;