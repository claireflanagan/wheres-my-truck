import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setToken } from '../../actions/auth';

class Callback extends PureComponent {
  static propTypes = {
    token: PropTypes.string,
    setToken: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired
  };

  componentDidMount() {
    this.props.setToken()
      .then(() => this.props.history.replace('/'));
  }

  render() {
    return (
      <div>Loading</div>
    );
  }
}



export default connect(
  null,
  dispatch => ({
    setToken() {
      const action = setToken();
      dispatch(action);
      return action.payload;
    }
  })
)(withRouter(Callback));
