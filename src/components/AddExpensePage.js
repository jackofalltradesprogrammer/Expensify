import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { addExpense } from '../actions/expenses';

// We passed the onSubmit function to the ExpenseForm
// As we want to have edit & add expense component work seperatly
const AddExpensePage = (props) => (
  <div>
    <h1>Add Expense</h1>
    <ExpenseForm onSubmit={(expense) => {
      props.dispatch(addExpense(expense));
      props.history.push('/');
    }} />
  </div>
);

export default connect()(AddExpensePage);
