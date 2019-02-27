import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

// get access to Redux store for dispatching actions and state etc.
const store = configureStore();

// TODO addExpense -> Water bill
store.dispatch(addExpense({ description: 'Water bill' }));
// TODO addExpense -> Gas bill
store.dispatch(addExpense({ description: 'Gas bill' }));
// TODO setTextFilter -> bill (2 items) -> water (1 item)
store.dispatch(setTextFilter('bill'));
// TODO getVisibleExpenses -> print visibles ones to screen
const visibleExpenses = getVisibleExpenses(
  store.getState().expenses,
  store.getState().filters
);
console.log('TCL: expenses', expenses);
console.log(store.getState());

ReactDOM.render(<AppRouter />, document.getElementById('app'));
