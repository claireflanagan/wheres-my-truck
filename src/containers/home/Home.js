import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/routes';
import { getRole } from '../../selectors/auth';
import styles from './Home.css';

function Home({ role }) {
  return (
    <div className={styles.mainNav}>
      <Link to={ROUTES.TRUCKSLIST.linkTo()}>
        <i className="fas fa-info-circle" />
        <span>Truck Info</span >
      </Link>
      <Link to={ROUTES.TRUCKSTABLE.linkTo()}>
        <i className="fas fa-map-marker-alt" />
        <span>Where's my truck?</span >
      </Link>

      {role === 'admin' && <Link to={ROUTES.ADD_TRUCK.linkTo()} className={styles.add}>
        <i className="fas fa-plus" />
        <span>Add New Truck</span>
      </Link>}
      {role === 'admin' && <Link to={ROUTES.INVITE_USERS.linkTo()} className={styles.add}>
        <i className="fas fa-plus" />
        <span>Add New User</span>
      </Link>}
      {role === 'admin' && <Link to={ROUTES.ALL_USERS.linkTo()} className={styles.add}>
        <i className="fas fa-plus" />
        <span>Manage Users</span>
      </Link>}
    </div>
  );
}

Home.propTypes = {
  role: PropTypes.string.isRequired
};

export default connect(
  state => ({
    role: getRole(state)
  })
)(Home);
