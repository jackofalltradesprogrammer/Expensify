import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

// ADD_EXPENSE
const addExpense = ({
  description = '',
  note = '',
  amount = 0,
  createdAt = 0
} = {}) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
});

// REMOVE_EXPENSE
const removeExpense = ({id}) => ({
  type: 'REMOVE_EXPENSE',
  id
});

// SET_TEXT_FILTER
// SORT_BY_DATE
// SORT_BY_AMOUNT
// SET_START_DATE
// SET_END_STATE

// Expenses Reducer
// state should be an array so we use a constant
// ES6 spread -  ['Adam', ...names, 'Mike'] - it returns an array using an old array with ['Adam', name1, name2, .., 'Mike']
const expenseReducerDefaultState = [];

const expensesReducer = (state = expenseReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [...state, action.expense];
    case 'REMOVE_EXPENSE':
      // use es6 destructuring structure with filter
      return state.filter(({id}) => id !== action.id);
    default:
      return state;
  }
};
// Filters Reducer
// text => '', sortBy => 'date', startDate => undefined, endDate => undefined
const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: null,
  endDate: null
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
// store creation
//! Multiple reducers can be compined in one store
const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  })
);

// Subscribe to the store to track changes
store.subscribe(() => {
  console.log(store.getState());
});

const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100 }));
console.log('TCL: expenseOne', expenseOne);
const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 300 }));

store.dispatch(removeExpense({id: expenseOne.expense.id}));

const demoState = {
  expenses: [
    {
      id: 'poijasdfhwer',
      description: 'January Rent',
      note: 'This was the final payment for that address',
      amount: '54500',
      createdAt: 0
    }
  ],
  filters: {
    text: 'rent',
    sort: 'amount', // date or amount
    startDate: null,
    endDate: null
  }
};
