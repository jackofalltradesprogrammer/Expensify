import React from 'react';
import { Link } from 'react-router-dom';

// Link component calls to Router for client-side routing and prevents server-side routing
const NotFoundPage = () => (
  <div>
    404! - <Link to="/">Go home</Link>
  </div>
);

export default NotFoundPage;