import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/routes';
import { useCurrentUser } from '../../hooks/useCurrentUser';
import styles from './Home.css';
import Loading from '../commons/Loading';

export default function Home() {
  const user = useCurrentUser();
  if(!user) return <Loading />;
  const { role } = user;

  return (
    <div className={styles.mainNav}>
      <Link to={ROUTES.TRUCKSLIST.linkTo()}>
        <i className="fas fa-info-circle" />
        <span>Truck Info</span >
      </Link>
      <Link to={ROUTES.TRUCKSTABLE.linkTo()}>
        <i className="fas fa-map-marker-alt" />
        <span>Where&apos;s my truck?</span >
      </Link>
      <Link to={ROUTES.TRUCKCHECKOUT.linkTo(user.id)}>
        <i className="fas fa-truck-pickup" />
        <span>Truck Checkout Form</span >
      </Link>
      <Link to={ROUTES.TRUCKRETURN.linkTo()}>
        <i className="fas fa-truck-pickup" />
        <span>Truck Return Form</span >
      </Link>


      {role === 'admin' && <Link to={ROUTES.ADD_TRUCK.linkTo()} className={styles.add}>
        <i className="fas fa-plus" />
        <span>Add New Truck</span>
      </Link>}
      {role === 'admin' && <Link to={ROUTES.INVITE_USERS.linkTo()} className={styles.add}>
        <i className="fas fa-user-plus" />
        <span>Add New User</span>
      </Link>}
      {role === 'admin' && <Link to={ROUTES.ALL_USERS.linkTo()} className={styles.add}>
        <i className="fas fa-user-edit" />
        <span>Manage Users</span>
      </Link>}
    </div>
  );
}
