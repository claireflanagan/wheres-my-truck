import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Redirect
} from 'react-router-dom';
import { privateRoute } from '../../routes/privateRoute';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import { getRoutes } from '../../routes/routes';

export default privateRoute(function App() {
  return (
    <Router>
      <>
        <Header />
        <Switch>
          {getRoutes()}
        </Switch>
        <Footer />
       
      </>

    </Router>
  );
});
