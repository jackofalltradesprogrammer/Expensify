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

// set can take anytime of data supplied to it
// database.ref().set('This is my data.');

// if no arguments supplied to ref, it erases everything
// database.ref('age').set(27);
// database.ref('location/city').set('New York');
// attributes object with height and weight
database
  .ref('attributes')
  .set({ height: 66, weight: 150 })
  .then(() => {
    console.log('Data is saved');
  })
  .catch(e => {
    console.log('Height and weight falied', e);
  });
