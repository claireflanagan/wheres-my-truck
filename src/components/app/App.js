import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import { ROUTES, getRoutes } from '../../routes/routes';
import { privateRoute } from '../../routes/privateRoute';
import Header from '../../containers/header/Header';

export default privateRoute(function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          {getRoutes()}
          <Redirect to={ROUTES.HOME.path} />
        </Switch>
      </div>
    </Router>
  );
});
