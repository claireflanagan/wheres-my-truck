import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/routes';
import styles from './Home.css';

export default function Home() {
  return (
    <div className={styles.mainNav}>
      <Link to={ROUTES.TRUCKSLIST.linkTo()}>Truck Info</Link><br/>
      <Link to={ROUTES.TRUCKSTABLE.linkTo()}>Where's my truck?</Link><br/>
      <Link to={ROUTES.ADD_TRUCK.linkTo()}>Add New Truck</Link>
    </div>
  );
}
