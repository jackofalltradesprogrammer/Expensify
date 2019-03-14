// it talkes all non-named exports and dumb them in firebase
import * as firebase from 'firebase';

// we don't want to pass API keys for security purposes..so we are passing through environment variables
const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGIND_SENDER_ID
};
firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

// child_removed - this event get fired when an expense(child) is removed
// and it returns the snapshot of the removed child
// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// // child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// // child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// const onValue = database.ref('expenses').on('value', snapshot => {
//   const expenses = [];
//   snapshot.forEach(childSnapshot => {
//     expenses.push({ id: childSnapshot.key, ...childSnapshot.val() });
//   });
//   console.log(expenses);
// });

// database
//   .ref('expenses')
//   .once('value')
//   .then(snapshot => {
//     const expenses = [];
//     // for each is used to iteratore over all the child nodes on the snapshot
//     // and key can be used to get the value of the key of the node
//     // and val vwill be the contents of the key
//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });
//     console.log(expenses);
//   });

// TODO Setup "expenses" with three items (description, note, amount, createAt)
// database.ref('expenses').push({
//   description: 'Rent',
//   note: '',
//   amount: 19500,
//   createdAt: 983768768
// });
// database.ref('expenses').push({
//   description: 'Phone bill',
//   note: '',
//   amount: 5900,
//   createdAt: 932432383
// });
// database.ref('expenses').push({
//   description: 'Food',
//   note: '',
//   amount: 9195,
//   createdAt: 993454983
// });

// database.ref('notes/-L_hSVK5t6sEXKRGj5ii').update({
//   body: 'Buy food'
// });

// database.ref('notes/-L_hSVK5t6sEXKRGj5ii').remove();

// push() method is used to create a list with a uniqure property for every element pushed
// and also returns its reference
// database.ref('notes').push({
//   title: 'Course Topics',
//   body: 'React, Native, Angular, Python'
// });

// const firebaseNotes = {
//   notes: {
//     apsdfs: {
//       title: 'First note!',
//       body: 'This is my note'
//     },
//     asfsfsdfds: {
//       title: 'Another note',
//       body: 'This is my note'
//     }
//   }
// };

// const notes = [
//   { id: '12', title: 'First note!', body: 'This is my note' },
//   { id: '1322', title: 'Another note!', body: 'This is my note' }
// ];

// database.ref('notes').set(notes);

// Setup data sub -> Andrew is a software Developer at amazon
// const onValueChange = database.ref().on('value', (snapshot) => {
//   const value = snapshot.val();
//   console.log(`${value.name} is a ${value.job.title} at ${value.location.city}` );
// }, (e) => {
//   console.log('Data Fetching failed', e);
// });
