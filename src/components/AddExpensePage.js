import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { addExpense } from '../actions/expenses';

// We passed the onSubmit function to the ExpenseForm
// As we want to have edit & add expense component work seperatly
// to avoid inline functions for testing, we convert into class component
export class AddExpensePage extends React.Component {
  onSubmit = expense => {
    // props.dispatch(addExpense(expense));
    this.props.addExpense(expense);
    this.props.history.push('/');
  };
  render() {
    return (
      <div>
        <h1>Add Expense</h1>
        <ExpenseForm onSubmit={this.onSubmit} />
      </div>
    )
  }
}

// this makes it more testable
const mapDispatchToProps = dispatch => ({
  addExpense: expense => dispatch(addExpense(expense))
});
// this makes it more testable
export default connect(
  undefined,
  mapDispatchToProps
)(AddExpensePage);
