import React, { PureComponent } from 'react';
import roles from './roles';
import { subscribe, signin } from '../services/auth';
import Login from '../components/login/Login';

export const privateRoute = (Component, role = roles.USER) => {
  class PrivateRoute extends PureComponent {
    state = {
      user: null
    }

    componentDidMount() {
      this.unsubscribe = subscribe((user) => {
        console.log(user);
        this.setState({ user });
      });
    }

    componentWillUnmount() {
      this.unsubscribe && this.unsubscribe();
    }

    render() {
      if(!this.state.user) return <Login />;
      return <Component {...this.props} />;
    }
  }

  return PrivateRoute;
};
