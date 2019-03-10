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

// ref() - It gives us a reference to the subset of a database
// if we don't pass anything we get the access to the root of the database
database
  .ref()
  .set({
    name: 'Harpreet Singh',
    age: 26,
    isSingle: true,
    location: {
      city: 'Philadelphia',
      country: 'United States'
    }
  })
  .then(() => {
    console.log('Data is saved');
  })
  .catch(e => {
    console.log('This failed.', e);
  });

  // we can also remove data by setting it to null
  // database.ref('isSingle').set(null);

// database
//   .ref()
//   .remove()
//   .then(() => {
//     console.log('Data was removed');
//   })
//   .catch(() => {
//     console.log('Did not remove data', e);
//   });
