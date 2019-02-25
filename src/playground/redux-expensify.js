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
const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
});

// EDIT_EXPENSE
const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});

// SET_TEXT_FILTER
const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text
});

// SORT_BY_DATE
const sortByDate = () => ({
  type: 'SORT_BY_DATE'
});
// SORT_BY_AMOUNT
const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT'
});
// SET_START_DATE
const setStartDate = (startDate = null) => ({
  type: 'SET_START_DATE',
  startDate
});
// SET_END_STATE
const setEndDate = (endDate = null) => ({
  type: 'SET_END_DATE',
  endDate
});

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
      return state.filter(({ id }) => id !== action.id);
    case 'EDIT_EXPENSE':
      // use es6 object spreading syntax '...' to overide/update alreday created state with new values
      return state.map(expense => {
        if (expense.id === action.id) {
          return { ...expense, ...action.updates };
        } else {
          return expense;
        }
      });
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
    case 'SET_TEXT_FILTER':
      return { ...state, text: action.text };
    case 'SORT_BY_DATE':
      return { ...state, sortBy: 'date' };
    case 'SORT_BY_AMOUNT':
      return { ...state, sortBy: 'amount' };
    case 'SET_START_DATE':
      return { ...state, startDate: action.startDate };
    case 'SET_END_DATE':
      return { ...state, endDate: action.endDate };
    default:
      return state;
  }
};

// time stmps (milliseconds)
// January 1st 1970 (unix epoch)
// 33400, 10, -203

// Get visible expenses by filtering out the expenses with the following conditions
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses
    .filter(expense => {
      const startDateMatch =
        typeof startDate !== 'number' || expense.createdAt >= startDate;
      const endDateMatch =
        typeof endDate !== 'number' || expense.createdAt <= endDate;
      const textMatch = expense.description
        .toLowerCase()
        .includes(text.toLowerCase());

      return startDateMatch && endDateMatch && textMatch;
    })
    .sort((a, b) => {
      if (sortBy === 'date') {
        return a.createdAt < b.createdAt ? 1 : -1;
      }
      if (sortBy === 'amount') {
        return a.amount < b.amount ? 1 : -1;
      }
    });
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
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
});

const expenseOne = store.dispatch(
  addExpense({ description: 'Rent', amount: 100, createdAt: -21000 })
);
const expenseTwo = store.dispatch(
  addExpense({ description: 'Coffee', amount: 300, createdAt: -1000 })
);

// store.dispatch(removeExpense({ id: expenseOne.expense.id }));
// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }));

// store.dispatch(setTextFilter('ffe'));
// store.dispatch(setTextFilter());

store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(0));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(999));

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

// const user = {
//   name: 'Jen',
//   age: 24
// };
// // ES6 spreading with object, we can override the name and value pairs in the object
// // it will generate an error ..so we need to configure babel
// console.log({ ...user, location: 'Philadelphia', age: 27 });
