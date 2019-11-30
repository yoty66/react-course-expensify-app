import * as firebase from 'firebase';
import expenses from '../test/fixturs/expenses'
const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID
};

console.log(firebaseConfig);

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

const errorHandler = e => console.log('error',e);

database.ref('expenses').on('child_changed',(snapshot)=>{
    console.log(snapshot.val());
});

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export { firebase , googleAuthProvider, database as default };


