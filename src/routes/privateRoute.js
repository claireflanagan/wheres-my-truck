import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getToken } from '../selectors/auth';
import { login } from '../services/auth';
import roles from './roles';

export const privateRoute = (Component, role = roles.USER) => {
  class PrivateRouteContainer extends PureComponent {
    static propTypes = {
      token: PropTypes.string
    };

    needsAuth = () => !this.props.token && window.location.pathname !== '/callback';

    componentDidMount() {
      if(this.needsAuth()) login();
    }

    render() {
      if(this.needsAuth()) return <h1>LOADING</h1>;
      return <Component {...this.props} />;
    }
  }

  return connect(
    state => ({
      token: getToken(state)
    })
  )(PrivateRouteContainer);
};
