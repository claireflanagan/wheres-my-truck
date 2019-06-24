import React from 'react';
import styles from './TripDetail.css';
//import { ROUTES } from '../../routes/routes';
//import { Link } from 'react-router-dom';
import { useFirebase } from '../../hooks/useFirebase';
import { tripsCollection } from '../../services/collections';
import Loading from '../commons/Loading';
import { app } from '../../services/firebase';

export default function TripDetail({ match }) {
  const trip = useFirebase(tripsCollection.doc(match.params.id));
  if(!trip) return <Loading />;

  return (
    <section className={styles.TripDetail}>
      <header>
        <hgroup>
          <h1 className={styles.name}>Trip Details:</h1>
          <h2>Trip Start Date: {trip.startDate}</h2>
          <h2>Trip End Date: {trip.endDate}</h2>
          <h2>Truck Pickup Location: {trip.gotLocation}</h2>
          <h2>Truck Return Location: {trip.endLocation}</h2>
          <h2>Trip Purpose: {trip.tripPurpose}</h2>
        </hgroup>
      </header>

      {/* <dl>
        <dt>Fluids</dt>
        <dd>{truck.vin}</dd>
        <dt>Tire Size</dt>
        <dd>{truck.tireSize}</dd>
        <dt>Bought Date</dt>
        <dd>{truck.boughtDate.toDate().toISOString()}</dd>
      </dl> */}
    </section>
  );
}


