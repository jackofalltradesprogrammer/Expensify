import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
// numeral library to format amounts
import numeral from 'numeral';
// Export a stateless functional component
// description, amount, createdAt

// TODO remove button to remove an expense
// * getting dispatch after using spreading syntax for props
const ExpenseListItem = ({ id, description, amount, createdAt }) => (
  <div>
    <Link to={`/edit/${id}`}>
      <h3>{description}</h3>
    </Link>
    <p>
      {numeral(amount/100).format('$0,0.00')}
       - 
       {moment(createdAt).format('MMMM Do, YYYY')}
    </p>
  </div>
);

export default ExpenseListItem;
