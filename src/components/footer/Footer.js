import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/routes';
import { signout } from '../../services/auth';
import styles from './Footer.css';

export default function Footer() {
  return (
    <div className={styles.footer}>
      <Link to={ROUTES.HOME.linkTo()} className={styles.navlink}> 
        <span><i className="fas fa-home" />Home</span>
      </Link>
      <Link to={ROUTES.TRUCKSLIST.linkTo()} className={styles.navlink}>
        <span><i className="fas fa-info-circle" />Trucks</span>
      </Link>
      <Link to={ROUTES.TRUCKCHECKOUT.linkTo()} className={styles.navlink}>
        <span><i className="fas fa-truck-pickup" />Checkout</span>
      </Link>
      <button onClick={signout} className={styles.navlink}>
        <span><i className="fas fa-sign-out-alt" />Logout</span>
      </button>
    </div>
  );
}
