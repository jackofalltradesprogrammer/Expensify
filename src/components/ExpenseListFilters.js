import React from 'react';
import  {connect } from 'react-redux';
import {setTextFilter} from '../actions/filters';

// this dispatch function provided with props in same as store.dispatch({action,..})
const ExpenseListFilters = (props) => (
  <div>
    <input type="text" value={props.filters.text} onChange={(e) => {
      props.dispatch(setTextFilter(e.target.value));
    }}/>
  </div>
);

const mapStateToProps = (state) => {
  return {
    filters: state.filters
  };
};

export default connect(mapStateToProps)(ExpenseListFilters);