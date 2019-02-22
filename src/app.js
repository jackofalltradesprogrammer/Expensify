// install --> import use
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
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

// setup the router
// A route takes a path  for url and the componenet we want to show
// Api for Browswer Route to expect have one child or nothing so use <div>
// Browser needs to know what to do with url (go to server or not)- webpack.config.js
const routes = (
  <BrowserRouter>
    <div>
      {/*-- Route render if the first character of url matches and to override that 'exact' match needs to be true */}
      <Route path="/" component={ExpenseDashboardPage} exact={true} />
      <Route path="/create" component={AddExpensePage} exact={true} />
      <Route path="/edit" component={EditExpensePage} exact={true} />
      <Route path="/help" component={HelpPage} exact={true} />
    </div>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));
