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
  return dispatch => {
    const {
      description = '',
      note = '',
      amount = 0,
      createdAt = 0
    } = expenseData;
    const expense = { description, note, amount, createdAt };
    database
      .ref('expenses')
      .push(expense)
      .then((ref) => {
        dispatch(addExpense({id: ref.key, ...expense}));
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
