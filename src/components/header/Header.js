import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/routes';
import styles from './Header.css';

export default function Header() {
  return (
    <div className={styles.header}>
      <Link to={ROUTES.HOME.linkTo()}>
        <img src="https://res.cloudinary.com/dfgcomb18/image/upload/v1549764837/dude%20wheres%20my%20truck/logo.png" />
        <h1><span>Dude,</span><br />Where&apos;s My Truck?</h1>
      </Link>
    </div>
  );
}
