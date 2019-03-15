import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startAddExpense } from '../actions/expenses';

// We passed the onSubmit function to the ExpenseForm
// As we want to have edit & add expense component work seperatly
// to avoid inline functions for testing, we convert into class component
export class AddExpensePage extends React.Component {
  onSubmit = expense => {
    // props.dispatch(addExpense(expense));
    this.props.startAddExpense(expense);
    this.props.history.push('/');
  };
  render() {
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Add Expense</h1>
          </div>
        </div>
        <div className="content-container">
          <ExpenseForm onSubmit={this.onSubmit} />
        </div>
      </div>
    );
  }
}

// this makes it more testable
const mapDispatchToProps = dispatch => ({
  startAddExpense: expense => dispatch(startAddExpense(expense))
});
// this makes it more testable
export default connect(
  undefined,
  mapDispatchToProps
)(AddExpensePage);
