import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/routes';
import { destroySession } from '../../actions/auth';
import styles from './Header.css';

function Header({ logout }) {
  return (
    <div className={styles.header}>
      <Link to={ROUTES.HOME.linkTo()}>
        <img src="https://res.cloudinary.com/dfgcomb18/image/upload/v1549764837/dude%20wheres%20my%20truck/logo.png" />
        <h1><span>Dude,</span><br />Where&apos;s My Truck?</h1>
      </Link>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  logout() {
    dispatch(destroySession());
  }
});

export default connect(
  null,
  mapDispatchToProps
)(Header);
