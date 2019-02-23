import { createStore, combineReducers } from 'redux';

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