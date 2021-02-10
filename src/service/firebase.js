import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyBaQCwhZTDC9CkPv3cUDIWnd4dJRohEMIw",
    authDomain: "pokemon-gamevp.firebaseapp.com",
    databaseURL: "https://pokemon-gamevp-default-rtdb.firebaseio.com",
    projectId: "pokemon-gamevp",
    storageBucket: "pokemon-gamevp.appspot.com",
    messagingSenderId: "477418863582",
    appId: "1:477418863582:web:73b15c84de1d05c947fb4f"
  };

firebase.initializeApp(firebaseConfig);

export const fire = firebase;
export const database = fire.database();

export default database;