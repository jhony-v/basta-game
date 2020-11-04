import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyDMQqMfKrwJ0t3pl0nAb8BkUWTn2uUa_JM",
    authDomain: "game-tutti-frutti.firebaseapp.com",
    databaseURL: "https://game-tutti-frutti.firebaseio.com",
    projectId: "game-tutti-frutti",
    storageBucket: "game-tutti-frutti.appspot.com",
    messagingSenderId: "480296497460",
    appId: "1:480296497460:web:13dcb24b943b0ff087b561",
    measurementId: "G-3BQ2QTK61Q"
};

if ( firebase.app.length === 0)
    firebase.initializeApp(firebaseConfig);

export const firebaseFirestore = firebase.firestore();