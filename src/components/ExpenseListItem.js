import React from 'react';
import { Link } from 'react-router-dom';
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
      {amount} - {createdAt}
    </p>
  </div>
);

export default ExpenseListItem;
