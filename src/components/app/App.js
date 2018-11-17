import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { ROUTES } from '../../routes/routes';

export default function App() {
  return (
    <Router>
      <div>
        <h1>wheres my truck dude</h1>
        <Switch>
          <Route component={ROUTES.IMAGEDISPLAY.Component} path={ROUTES.IMAGEDISPLAY.path} />
          <Route component={ROUTES.TRUCKSTABLE.Component} path={ROUTES.TRUCKSTABLE.path} />
          <Route component={ROUTES.TRUCKSLIST.Component} path={ROUTES.TRUCKSLIST.path} />
          <Route component={ROUTES.TRUCK.Component} path={ROUTES.TRUCK.path} />
          <Redirect to={ROUTES.TRUCKSTABLE.path} />
        </Switch>
      </div>
    </Router>
  );
}
