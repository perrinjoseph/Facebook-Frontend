
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyAbDvFZXu9ByKh5uCbHsk_1AO-7O6A3kV0",
  authDomain: "facebook-clone-67c67.firebaseapp.com",
  projectId: "facebook-clone-67c67",
  storageBucket: "facebook-clone-67c67.appspot.com",
  messagingSenderId: "1037383896866",
  appId: "1:1037383896866:web:c9ec88b9e6e733937e1f7b",
  measurementId: "G-5CDX325V54"
};

//first create the connection 
const frontAndBackendConnection = firebase.initializeApp(firebaseConfig);

//now to get access to our database we do this
// const db = frontAndBackendConnection.firestore();

//enable our authentication so that we can do stuff like loggin in and stuff
const auth = firebase.auth();

//now in this app we are using the google sign in auth so we will have to tdo the following. If it is regular email and password then it is slightly different
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
// export default db;
