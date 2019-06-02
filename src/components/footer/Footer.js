import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/routes';
import { signout } from '../../services/auth';
import styles from './Footer.css';

export default function Footer() {
  return (
    <div className={styles.footer}>
      <Link to={ROUTES.HOME.linkTo()}>
        <i className="fas fa-home" />
        <span>Home</span>
      </Link>
      <Link to={ROUTES.TRUCKSLIST.linkTo()}>
        <i className="fas fa-map-marker-alt" />
        <span>Where</span>
      </Link>
      <Link to={ROUTES.TRUCKCHECKOUT.linkTo()}>
        <i className="fas fa-truck-pickup" />
        <span>Checkout</span>
      </Link>
      <Link to={signout}>
        <i className="fas fa-sign-out-alt" />
        <span>Logout</span>
      </Link>
    </div>
  );
}
