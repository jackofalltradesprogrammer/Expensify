import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, startRemoveExpense } from '../actions/expenses';

// TODO Refactor EditExpensePage to be a class based component
// TODO Setup mapDispatchToProps editExpense and removeExpense

export class EditExpensePage extends React.Component {
  onSubmit = expense => {
    // TODO Dispatch the action to edit the expense
    this.props.editExpense(this.props.expense.id, expense);
    // TODO Redirect to the dashboard
    this.props.history.push('/');
    // console.log('updated', expense);
  };
  onRemove = () => {
    this.props.startRemoveExpense({ id: this.props.expense.id });
    this.props.history.push('/');
  };
  render() {
    return (
      <div>
        <ExpenseForm expense={this.props.expense} onSubmit={this.onSubmit} />
        <button onClick={this.onRemove}>Remove</button>
      </div>
    );
  }
}


const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find(
      expense => expense.id === props.match.params.id
    )
  };
};

// we need to pass the props to the component as they are passed above
const mapDispatchToProps = (dispatch) => ({
  editExpense: (id, expense) => {
    dispatch(editExpense(id, expense));
  },
  startRemoveExpense: data => {
    dispatch(startRemoveExpense(data));
  }
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditExpensePage);
