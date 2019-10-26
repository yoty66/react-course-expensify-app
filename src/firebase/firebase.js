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

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

const errorHandler = e => console.log('error',e);

database.ref('expenses').on('child_changed',(snapshot)=>{
    console.log(snapshot.val());
});

export { firebase , database as default };

// expenses.forEach(({id , ...restAttr})=> database.ref('expenses').push({...restAttr}));
//  database.ref('expenses').on('value', (snapshot)=>{
//      const expenses = [];
//      snapshot.forEach(
//          (childSnapshot)=>{
//              expenses.push({
//                  id:childSnapshot.key,
//                  ...childSnapshot.val()
//              })
//          });
//      console.log(expenses);
//
//  },errorHandler());









// let name , company , title ;
// database.ref().on('value',  snapshot =>{
//     const value = snapshot.val();
//     const shouldReprint = !title || !company || !name
//         || title !== value.job.title || company !== value.job.company || name !== value.name
//
//     shouldReprint && console.log( `${value.name} is a ${value.job.title} at ${value.job.company}`)
//     }
// , errorHandler
// )

// database.ref()
//     .once('value')
//     .then(snapshot => console.log(snapshot.val()))
//     .catch(errorHandler);



// firebase.database().ref().set({
//     name: 'Yotam Avraham',
//     age: '27',
//     stressLevel: 6,
//     job:{
//         title: 'Software developer ',
//         company: 'Google'
//     },
//     location:{
//     city:'Modiin',
//     country:'Israel'
//     }
// }).then(
//     ()=>console.log('Success')
// ).catch(
//     (error)=>console.log('Failure', error)
// );
//
// firebase.database().ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seattle'
// });

// firebase.database().ref('attributes').set({
//     height: '1.80m',
//     weight:'80kg'
// }).then(
//     ()=>console.log('Attributes Success')
// ).catch(
//     (error)=>console.log('Attributes Failure', error)
// );
//
// firebase.database().ref('isSingle').remove()
//     .then((arg)=>console.log('successfully deleted ', arg))
//     .catch((arg)=>console.log('error removing  ', arg))

