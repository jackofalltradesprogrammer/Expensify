import React from 'react';
import { Link } from 'react-router-dom';

const PortfolioPage = () => {
  return (
    <div>
      <h1>My Work</h1>
      <p>This is portfolio page</p>
      <li>
        <Link to="/portfolio/55">Item One</Link>
      </li>
      <li>
        <Link to="/portfolio/58">Item two</Link>
      </li>
    </div>
  );
};

export default PortfolioPage;
