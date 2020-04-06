import Rebase from "re-base";
import firebase from "firebase";    

const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyBRKFaTTwRNI8FgbkONRYJGW7FywS7zIsY",
        authDomain: "catch-of-the-day-f48c5.firebaseapp.com",
        databaseURL: "https://catch-of-the-day-f48c5.firebaseio.com"
})

const base = Rebase.createClass(firebaseApp.database());

// this is named export
export { firebaseApp };

// this is a default export
export default base;