// install --> import use
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
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

const NotFoundPage = () => (
  <div>
    404!
  </div>
);

// setup the router
// A route takes a path  for url and the componenet we want to show
// Api for Browswer Route to expect have one child or nothing so use <div>
// Browser needs to know what to do with url (go to server or not)- webpack.config.js
// Switch router picks the path that matches and if none matches then it selects always match that is with no path
const routes = (
  <BrowserRouter>
    <Switch>
      {/*-- Route render if the first character of url matches and to override that 'exact' match needs to be true */}
      <Route path="/" component={ExpenseDashboardPage} exact={true} />
      <Route path="/create" component={AddExpensePage} />
      <Route path="/edit" component={EditExpensePage} />
      <Route path="/help" component={HelpPage} />
      <Route component={NotFoundPage} />
    </Switch>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));
