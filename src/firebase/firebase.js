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

// on() is similar to once() but it's like a subscription and takes a callback function
// we cannot use promises here becuase promises need to be resolved and we need functions to execute when data changes
// it returns the callback function  unmodified to pass to off (subscription is cancelled)
const onValueChange = database.ref().on('value', (snapshot) => {
  console.log(snapshot.val());
}, (e) => {
  console.log('Error with data fetching', e);
});

setTimeout(() => {
  database.ref('age').set(29);
}, 3500);

setTimeout(() => {
  database.ref().off('value',onValueChange);
}, 7000);


setTimeout(() => {
  database.ref('age').set(30);
}, 10500);

// Setup data sub -> Andrew is a software Developer at amazon
const onValueChange2 = database.ref().on('value', (snapshot) => {
  const value = snapshot.val();
  console.log(`${value.name} is a ${value.job.title} at ${value.location.city}` );
}, (e) => {
  console.log('Data Fetching failed', e);
});

setTimeout(() => {
  database.ref().update({
    name: 'Harpreet'
  });
}, 3500);
// how to fetch data from firebase database and only fetches information once
// database
//   .ref('location/city')
//   .once('value')  // once takes the eventType - so we pass value
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   }).catch((e) => {
//     console.log('Error fetching data', e);
//   });

// ref() - It gives us a reference to the subset of a database
// if we don't pass anything we get the access to the root of the database
// database
//   .ref()
//   .set({
//     name: 'Harpreet Singh',
//     age: 26,
//     stressLevel: 6,
//     job: { title: 'Software developer', company: 'Google' },
//     location: {
//       city: 'Philadelphia',
//       country: 'United States'
//     }
//   })
//   .then(() => {
//     console.log('Data is saved');
//   })
//   .catch(e => {
//     console.log('This failed.', e);
//   });

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
// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'location/city': 'Seattle'
// });
