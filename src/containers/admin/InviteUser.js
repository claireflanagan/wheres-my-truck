import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { inviteUser, clearInvitedUser } from '../../actions/auth';
import { getInvitedUser, getInviteError, getInviteLoading } from '../../selectors/auth';

class InviteUser extends PureComponent {
  static propTypes = {
    invite: PropTypes.func.isRequired,
    clearInvitedUser: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
    user: PropTypes.object,
    error: PropTypes.string
  };

  state = {
    email: ''
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.invite(this.state.email);
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  componentDidUpdate(prevProps) {
    if(prevProps.loading && !this.props.loading) {
      this.setState({ email: '' });
    }
  }

  componentWillUnmount() {
    this.props.clearInvitedUser();
  }

  render() {
    const { loading, error } = this.props;
    const { email } = this.state;
    return (
      <>
        <h2>Invite a user</h2>
        <div>
          {error && <span>{error}</span>}
        </div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="email" value={email} onChange={this.handleChange} />
          <button disabled={loading}>Invite</button>
        </form>
      </>
    );
  }
}

const mapStateToProps = state => ({
  user: getInvitedUser(state),
  error: getInviteError(state),
  loading: getInviteLoading(state)
});

const mapDispatchToProps = dispatch => ({
  invite(email) {
    dispatch(inviteUser(email));
  },
  clearInvitedUser() {
    return dispatch(clearInvitedUser());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InviteUser);
