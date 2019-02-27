import React from 'react';
import {connect} from 'react-redux';
// Connect is used to read from the store

const ExpenseList = (props) => (
  <div>
    <h1>ExpenseList</h1>
    {props.filters.text}
    {props.expenses.length}
  </div>
);

const mapStateToProps = (state) => {
  return {
    expenses : state.expenses,
    filters: state.filters
  };
};

// Connect accepts the sub-set of state of the store and return the object (anything)
// It works as HOC as it is taking ExpenseList component as an argument and connects it with the store
export default connect(mapStateToProps)(ExpenseList);
