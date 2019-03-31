import React, { PureComponent } from 'react';
import roles from './roles';
import { subscribe } from '../services/auth';
import Login from '../components/login/Login';
import Loading from '../components/commons/Loading';

export const privateRoute = (Component, role = roles.USER) => {
  class PrivateRoute extends PureComponent {
    state = {
      user: null,
      loading: true
    }

    componentDidMount() {
      this.unsubscribe = subscribe((user) => {
        this.setState({ loading: false, user });
      }, () => {
        this.setState({ loading: false });
      });
    }

    componentWillUnmount() {
      this.unsubscribe && this.unsubscribe();
    }

    render() {
      if(this.state.loading) return <Loading />;
      if(!this.state.user) return <Login />;
      return <Component {...this.props} />;
    }
  }

  return PrivateRoute;
};
