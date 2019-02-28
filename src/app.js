import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

// get access to Redux store for dispatching actions and state etc.
const store = configureStore();

// TODO addExpense -> Water bill
store.dispatch(addExpense({ description: 'Water bill', amount: 4500 }));
// TODO addExpense -> Gas bill
store.dispatch(addExpense({ description: 'Gas bill', amount: 4500 }));
// TODO setTextFilter -> bill (2 items) -> water (1 item)
store.dispatch(setTextFilter('water'));

// As the Redux store changes, the component renders itself
setTimeout(() => {
  store.dispatch(setTextFilter('bill'));
}, 3000);

// TODO getVisibleExpenses -> print visibles ones to screen
const visibleExpenses = getVisibleExpenses(
  store.getState().expenses,
  store.getState().filters
);
console.log(visibleExpenses);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
