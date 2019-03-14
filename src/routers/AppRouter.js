import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import AddExpensePage  from '../components/AddExpensePage';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage'
import EditExpensePage from '../components/EditExpensePage';
import HelpPage from '../components/HelpPage';
import Header from '../components/Header';
import NotFoundPage from '../components/NotFoundPage';
import LoginPage  from '../components/LoginPage';

// to make history available to other js code than components
// we have to use history(library) and not the history provided by react-router-dom
// Browser Router has its own history so we need to switch to Router to provide our history
export const history = createHistory();
const AppRouter = () => (
  <Router history={history}>
    <div>
      <Header />
      <Switch>
        {/*-- Route render if the first character of url matches and to override that 'exact' match needs to be true.
      ':' is used to make it dynamice and grab that value */}
        <Route path="/" component={LoginPage} exact={true} />
        <Route path="/dashboard" component={ExpenseDashboardPage} />
        <Route path="/create" component={AddExpensePage} />
        <Route path="/edit/:id" component={EditExpensePage} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
