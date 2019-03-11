// it talkes all non-named exports and dumb them in firebase
import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyD94FKlyXjiSD7-eHrvFi-SqrT-w-HmSIo',
  authDomain: 'expensify-c466a.firebaseapp.com',
  databaseURL: 'https://expensify-c466a.firebaseio.com',
  projectId: 'expensify-c466a',
  storageBucket: 'expensify-c466a.appspot.com',
  messagingSenderId: '39226797095'
};
firebase.initializeApp(config);

const database = firebase.database();

// TODO Setup "expenses" with three items (description, note, amount, createAt)
database.ref('expenses').push({
  description: 'Rent',
  note: '',
  amount: 19500,
  createdAt: 983768768
});
database.ref('expenses').push({
  description: 'Phone bill',
  note: '',
  amount: 5900,
  createdAt: 932432383
});
database.ref('expenses').push({
  description: 'Food',
  note: '',
  amount: 9195,
  createdAt: 993454983
});

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
