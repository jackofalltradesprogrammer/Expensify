// it talkes all non-named exports and dumb them in firebase
import * as firebase from 'firebase'; 

const config = {
  apiKey: "AIzaSyD94FKlyXjiSD7-eHrvFi-SqrT-w-HmSIo",
  authDomain: "expensify-c466a.firebaseapp.com",
  databaseURL: "https://expensify-c466a.firebaseio.com",
  projectId: "expensify-c466a",
  storageBucket: "expensify-c466a.appspot.com",
  messagingSenderId: "39226797095"
};
firebase.initializeApp(config);

firebase.database().ref().set({
  name: 'Harpreet Singh'
});