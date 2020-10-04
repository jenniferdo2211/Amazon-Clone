import firebase from "firebase";
const firebaseApp = firebase.initializeApp({
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    apiKey: "AIzaSyAUp-fIEYU34eglcMdxnfaVSAGpdUw8f8I",
    authDomain: "clone-4c4be.firebaseapp.com",
    databaseURL: "https://clone-4c4be.firebaseio.com",
    projectId: "clone-4c4be",
    storageBucket: "clone-4c4be.appspot.com",
    messagingSenderId: "409079433838",
    appId: "1:409079433838:web:abb7a2760d1fa25326747f",
    measurementId: "G-YLY9Y912KG"
});

// const db = firebaseApp.firestore();
const auth = firebase.auth();

// export { db, auth };
export { auth };