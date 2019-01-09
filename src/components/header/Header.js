import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/routes';
import styles from './Header.css';

export default function Header() {
  return (
    <div>
      <Link to={ROUTES.HOME.linkTo()} className={styles.header}>
        <img src="https://pbs.twimg.com/profile_images/661426209155190785/3dzbaSkC_400x400.jpg" alt="illustration of a bottle of water labeled 'agua' in the desert"/>
        <h1>Dude Where's My Truck</h1>
      </Link> 
    </div>
  );
}
