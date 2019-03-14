import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter, { history } from './routers/AppRouter';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { startSetExpenses } from './actions/expenses';
import { login, logout } from './actions/auth';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import { firebase } from './firebase/firebase';

// get access to Redux store for dispatching actions and state etc.
const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

// this function is used to render the component only once below (with Firebase)
let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById('app'));
  }
};

ReactDOM.render(<p>Loading ...</p>, document.getElementById('app'));

// auth() keeps an eye on authentication
firebase.auth().onAuthStateChanged(user => {
  if (user) {
    console.log('User\'s unique ID ', user.uid);
    //  calls the action which sets the uid in REDUX with auth Reducer
    store.dispatch(login(user.uid));
    store.dispatch(startSetExpenses()).then(() => {});
    renderApp();
    // if we have logged in and we are at logIn page - we need to redirect
    if (history.location.pathname === '/') {
      history.push('/dashboard');
    }
  } else {
    store.dispatch(logout());
    renderApp();
    history.push('/');
  }
});
