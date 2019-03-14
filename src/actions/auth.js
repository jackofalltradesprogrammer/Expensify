import { firebase, googleAuthProvider } from '../firebase/firebase';

export const startLogin = () =>{
  return () => {
    // we are using return here so we can use .then() on the promise
    return firebase.auth().signInWithPopup(googleAuthProvider);
  };
};

export const startLogout = () => {
  return () => {
    return firebase.auth().signOut();
  };
};