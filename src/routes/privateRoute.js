import React, { PureComponent } from 'react';
import roles from './roles';
import { subscribe, signin } from '../services/auth';

export const privateRoute = (Component, role = roles.USER) => {
  class PrivateRoute extends PureComponent {
    state = {
      user: null
    }

    componentDidMount() {
      this.unsubscribe = subscribe((user) => {
        this.setState({ user });
      }, () => {
        signin('ryan.mehta@gmail.com', 'Allsop99');
      });
    }

    componentWillUnmount() {
      this.unsubscribe && this.unsubscribe();
    }

    render() {
      if(!this.state.user) return null;
      return <Component {...this.props} />;
    }
  }

  return PrivateRoute;
};
