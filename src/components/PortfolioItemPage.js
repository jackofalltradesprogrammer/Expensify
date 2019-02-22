import React from 'react';
const PortfolioItemPage = props => {
  return (
    <div>
      <h1>A thing I've done </h1>
      <p>This is {props.match.params.ID} </p>
    </div>
  );
};

export default PortfolioItemPage;
