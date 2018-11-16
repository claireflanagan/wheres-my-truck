import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { ROUTES } from '../../routes/routes';

export default function App() {
  return (
    <Router>
      <div>
        <h1>wheres my truck dude</h1>
        <Switch>
          {/* <Route component={ROUTES.TRUCKS.Component} path={ROUTES.TRUCKS.path} />
          <Route component={ROUTES.TRUCK.Component} path={ROUTES.TRUCK.path} />
          <Redirect to={ROUTES.TRUCKS.path} /> */}
        </Switch>
      </div>
    </Router>
  );
}
