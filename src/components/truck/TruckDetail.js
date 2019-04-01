import React from 'react';
import styles from './TruckDetail.css';
import { ROUTES } from '../../routes/routes';
import { Link } from 'react-router-dom';
import { useFirebase } from '../../hooks/useFirebase';
import { trucksCollection } from '../../services/collections';
import Loading from '../commons/Loading';
import { app } from '../../services/firebase';

export default function TruckDetail({ match }) {
  const truck = useFirebase(trucksCollection.doc(match.params.id));
  if(!truck) return <Loading />;

  return (
    <section className={styles.TruckDetail}>
      <header>
        <hgroup>
          <h2 className={styles.name}>{truck.name}</h2>
          <h3>{truck.year} {truck.make} {truck.model}</h3>
          <h3>plate: {truck.plates}</h3>
        </hgroup>
        <span className={`${styles.use} ${truck.inUse ? styles.ride : styles.free}`} >
          {truck.inUse ? 'ride' : 'free'}
        </span>
      </header>

      <div className={styles.truckLinks}>
        <Link to={ROUTES.IMAGEDISPLAY.linkTo(truck.id, 'registration')}>Registration</Link>
        <Link to={ROUTES.IMAGEDISPLAY.linkTo(truck.id, 'insurance')}>Insurance</Link>
        <Link to={ROUTES.MAINTENANCE_LIST.linkTo(truck.id)}>Maintenance Records</Link>
      </div>
      <dl>
        <dt>Vin</dt>
        <dd>{truck.vin}</dd>
        <dt>Tire Size</dt>
        <dd>{truck.tireSize}</dd>
        <dt>Bought Date</dt>
        <dd>{truck.boughtDate.toDate().toISOString()}</dd>
      </dl>
    </section>
  );
}
