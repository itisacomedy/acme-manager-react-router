import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Route, Router, hashHistory, IndexRedirect } from 'react-router';

const AppRoutes = () => (
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <IndexRedirect to='/employees' />
    </Route>
  </Router>
)

ReactDOM.render(
  <AppRoutes />,
  document.getElementById('app')
);
