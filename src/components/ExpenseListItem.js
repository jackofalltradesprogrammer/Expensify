import React from 'react';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses';
// Export a stateless functional component
// description, amount, createdAt

// TODO remove button to remove an expense
// * getting dispatch after using spreading syntax for props
const ExpenseListItem = (
  { dispatch, id, description, amount, createdAt },
  props
) => (
  <div>
    <h3>{description}</h3>
    <p>
      {amount} - {createdAt}
    </p>
    <button
      onClick={() => {
        dispatch(removeExpense({ id }));
      }}
    >
      Remove
    </button>
  </div>
);

export default connect()(ExpenseListItem);
