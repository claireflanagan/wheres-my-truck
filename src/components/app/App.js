import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { ROUTES } from '../../routes/routes';
import styles from '../home/Home.css';
import { privateRoute } from '../../containers/auth/privateRoute';
import Header from '../../containers/header/Header';
//import TruckCheckoutForm from '../trip/TruckCheckoutForm';

export default privateRoute(function App() {
  return (
    <Router>
      <div>
        <Header />
        <nav className={styles.mainNav}>
          {/* <NavLink to="/">Home</NavLink> */}
        </nav>
        <Switch>
          <Route component={ROUTES.AUTH_CALLBACK.Component} path={ROUTES.AUTH_CALLBACK.path} />
          <Route component={ROUTES.TRUCK_CHECKOUT_FORM.Component} path={ROUTES.TRUCK_CHECKOUT_FORM.path} />
          <Route component={ROUTES.MAINTENANCE_LIST.Component} path={ROUTES.MAINTENANCE_LIST.path} />
          <Route component={ROUTES.IMAGEDISPLAY.Component} path={ROUTES.IMAGEDISPLAY.path} />
          <Route component={ROUTES.TRUCKSTABLE.Component} path={ROUTES.TRUCKSTABLE.path} />
          <Route component={ROUTES.TRUCKSLIST.Component} path={ROUTES.TRUCKSLIST.path} />
          <Route component={ROUTES.ADD_TRUCK.Component} path={ROUTES.ADD_TRUCK.path} />
          <Route component={ROUTES.TRUCK.Component} path={ROUTES.TRUCK.path} />
          <Route component={ROUTES.HOME.Component} path={ROUTES.HOME.path} />
          <Redirect to={ROUTES.HOME.path} />
        </Switch>
      </div>
    </Router>
  );
});
