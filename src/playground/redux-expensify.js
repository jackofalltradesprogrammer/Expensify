import { createStore, combineReducers } from 'redux';

// ADD_EXPENSE
// REMOVE_EXPENSE
// SET_TEXT_FILTER
// SORT_BY_DATE
// SORT_BY_AMOUNT
// SET_START_DATE
// SET_END_STATE


// Expenses Reducer
// state should be an array so we use a constant
const expenseReducerDefaultState = [];

const expensesReducer = (state = expenseReducerDefaultState, action) => {
  switch (action.type) {
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
const store = createStore(combineReducers({
  expenses: expensesReducer,
  filters: filtersReducer
}));

console.log(store.getState());

const demoState = {
  expenses: [{
    id: 'poijasdfhwer',
    description: 'January Rent',
    note: 'This was the final payment for that address',
    amount: '54500',
    createdAt: 0
  }],
  filters: {
    text: 'rent',
    sort: 'amount', // date or amount
    startDate: null,
    endDate: null
  }
};