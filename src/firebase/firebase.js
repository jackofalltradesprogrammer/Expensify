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
    stressLevel: 6,
    job: { title: 'Software developer', company: 'Google' },
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

// we use object as an argument for update() to make the change; its different from set where you can pass anything
// we can add or delete by setting null.
// database.ref().update({
//   name: 'Mike',
//   age: 29,
//   job: 'Software developer',
//   isSingle: null
// });

// to update nested data instead of root we need to use a different syntax
// change teh stressLevel to a 9
// Change job.company to Amazon
// Change location.city to Seattle
database.ref().update({
  stressLevel: 9,
  'job/company': 'Amazon',
  'location/city': 'Seattle'
});
