// install --> import use
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const ExpenseDashboardPage = () => (
  <div>This is from my dashboard component</div>
);
const AddExpensePage = () => <div>This is from my add expense component</div>;

// TODO: add EditExpensePage
const EditExpensePage = () => <div>This is from my edit expense page</div>;

// TODO: add HelpPage
const HelpPage = () => <div> This is from my help expense page</div>;

// Link component calls to Router for client-side routing and prevents server-side routing
const NotFoundPage = () => (
  <div>
    404! - <Link to="/">Go home</Link>
  </div>
);

// TODO: link to home page, create expense page, link to the edit page, link to the help page

const Header = () => (
  <header>
    <h1>Expensify</h1>
    <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink> 
    <NavLink to="/create" activeClassName="is-active">Create Expense</NavLink>
    <NavLink to="/edit" activeClassName="is-active">Edit Expense</NavLink>
    <NavLink to="/help" activeClassName="is-active">Help</NavLink>
  </header>
);

// setup the router
// A route takes a path  for url and the componenet we want to show
// Api for Browswer Route to expect have one child or nothing so use <div>
// Browser needs to know what to do with url (go to server or not)- webpack.config.js
// Switch router picks the path that matches and if none matches then it selects always match that is with no path
const routes = (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        {/*-- Route render if the first character of url matches and to override that 'exact' match needs to be true */}
        <Route path="/" component={ExpenseDashboardPage} exact={true} />
        <Route path="/create" component={AddExpensePage} />
        <Route path="/edit" component={EditExpensePage} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));
