import uuid from 'uuid';
import database from '../firebase/firebase';

// Actions need to be performed when adding expenses with Expenses Reducer to the Redux store
// ADD_EXPENSE ( as the value is passed from firebase we don't need id anymore)
export const addExpense = expense => ({
  type: 'ADD_EXPENSE',
  expense
});

// we can return a function to REDUX as we are are using thunk (middleware)
export const startAddExpense = (expenseData = {}) => {
  // this will be called internally by REDUX and dispatch will be passed to it
  // this is called with getState also
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const {
      description = '',
      note = '',
      amount = 0,
      createdAt = 0
    } = expenseData;
    const expense = { description, note, amount, createdAt };
    // this will be useful for testing as it will return a promise, and we can do promise chaining
    return database
      .ref(`users/${uid}/expenses`)
      .push(expense)
      .then(ref => {
        dispatch(addExpense({ id: ref.key, ...expense }));
      });
  };
};
// REMOVE_EXPENSE
export const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
});

// EDIT_EXPENSE
export const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});

export const startEditExpense = (id, updates) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database
      .ref(`users/${uid}/expenses/${id}`)
      .update(updates)
      .then(() => {
        dispatch(editExpense(id, updates));
      });
  };
};

// SET_EXPENSES
export const setExpenses = expenses => ({
  type: 'SET_EXPENSES',
  expenses
});

// this helps to fetch all the expenses and set the data to redux store...
// we are returning a promise as our our app.js wants to do something with it....
export const startSetExpenses = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database
      .ref(`users/${uid}/expenses`)
      .once('value')
      .then(snapshot => {
        const expenses = [];
        snapshot.forEach(childSnapshot => {
          expenses.push({ id: childSnapshot.key, ...childSnapshot.val() });
        });
        dispatch(setExpenses(expenses));
      });
  };
};

// Expense Removal challenge

// 1. Create startRemoveExpense (same call signature as removeExpense)
export const startRemoveExpense = ({ id } = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database
      .ref(`users/${uid}/expenses/${id}`)
      .remove()
      .then(() => {
        dispatch(removeExpense({ id }));
      });
  };
};
