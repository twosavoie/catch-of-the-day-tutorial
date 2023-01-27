import Rebase from 're-base';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/database';
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyC8pfNok3aYA2T4xPjuwPuraFQypIY2cTA",
  authDomain: "catch-of-the-day---lisa-savoie.firebaseapp.com",
  databaseURL: "https://catch-of-the-day---lisa-savoie-default-rtdb.firebaseio.com",
});
const base = Rebase.createClass(firebaseApp.database());
// This is a named export
export { firebaseApp };
// this is a default export
export default base;