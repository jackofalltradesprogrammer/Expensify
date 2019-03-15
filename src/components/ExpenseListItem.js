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
  <Link className="list-item" to={`/edit/${id}`}>
    <div>
      <h3 className="list-item__title">{description}</h3>
      <span className="list-item__subtitle">{moment(createdAt).format('MMMM Do, YYYY')}</span>
    </div>
    <h3 className="list-item__data">{numeral(amount / 100).format('$0,0.00')}</h3>
  </Link>
);

export default ExpenseListItem;
