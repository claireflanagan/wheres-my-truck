import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { ROUTES } from '../../routes/routes';
import { privateRoute } from '../../routes/privateRoute';
import Header from '../../containers/header/Header';

export default privateRoute(function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route component={ROUTES.AUTH_CALLBACK.Component} path={ROUTES.AUTH_CALLBACK.path} />
          <Route component={ROUTES.MAINTENANCE_LIST.Component} path={ROUTES.MAINTENANCE_LIST.path} />
          <Route component={ROUTES.IMAGEDISPLAY.Component} path={ROUTES.IMAGEDISPLAY.path} />
          <Route component={ROUTES.TRUCKSTABLE.Component} path={ROUTES.TRUCKSTABLE.path} />
          <Route component={ROUTES.TRUCKSLIST.Component} path={ROUTES.TRUCKSLIST.path} />
          <Route component={ROUTES.ADD_TRUCK.Component} path={ROUTES.ADD_TRUCK.path} />
          <Route component={ROUTES.TRUCK.Component} path={ROUTES.TRUCK.path} />
          <Route component={ROUTES.INVITE_USERS.Component} path={ROUTES.INVITE_USERS.path} />
          <Route component={ROUTES.ALL_USERS.Component} path={ROUTES.ALL_USERS.path} />
          <Route exact component={ROUTES.HOME.Component} path={ROUTES.HOME.path} />
          <Redirect to={ROUTES.HOME.path} />
        </Switch>
      </div>
    </Router>
  );
});
