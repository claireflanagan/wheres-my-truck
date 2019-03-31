import React from 'react';
import styles from './TruckDetail.css';
import { ROUTES } from '../../routes/routes';
import { Link } from 'react-router-dom';
import { useFirebase } from '../../hooks/useFirebase';
import { trucksCollection, truckChecksCollection } from '../../services/collections';
import Loading from '../commons/Loading';

export default function TruckDetail({ match }) {
  const truck = useFirebase(trucksCollection.doc(match.params.id));
  const truckCheck = useFirebase(truckChecksCollection.doc('0R4T8VgrDc3l0fiIhEgn'));
  // ask ryan next week about how to match to truck id
  console.log('truckcheck', truckCheck);
  if(!truck || !truckCheck) return <Loading />;

  return (
    <section className={styles.TruckDetail}>
      <header>
        <hgroup>
          <h2 className={styles.name}>{truck.name}</h2>
          <h3>{truck.year} {truck.make} {truck.model}</h3>
          <h3>plate: {truck.plates}</h3>
        </hgroup>
        <span className={`${styles.use} ${truck.inUse ? styles.ride : styles.free}`} >
          {truck.inUse ? 'in use' : 'free'}
        </span>
      </header>

      <div className={styles.truckLinks}>
        <Link to={ROUTES.IMAGEDISPLAY.linkTo(truck.id, 'registration')}>Registration</Link>
        <Link to={ROUTES.IMAGEDISPLAY.linkTo(truck.id, 'insurance')}>Insurance</Link>
        <Link to={ROUTES.MAINTENANCE_LIST.linkTo(truck.id)}>Maintenance Records</Link>
      </div>
      <dl>
        <dt>Last reported location</dt>
        <dd>{truck.location}</dd>
        <dt>Vin</dt>
        <dd>{truck.vin}</dd>
        <dt>Tire Size</dt>
        <dd>{truck.tireSize}</dd>
        <dt>Bought Date</dt>
        <dd>{truck.boughtDate.toDate().toISOString()}</dd>
        {truckCheck && 
          <div>
            <dt>TruckCheck</dt>
            <dd>Date of check: {truckCheck.date.toDate().toISOString()}</dd>
            <dt>AC and Heat</dt>
            <dd>Status: {truckCheck.acAndHeat.ok ? 'OK' : 'Not OK'}</dd>
            <dd>Notes: {truckCheck.acAndHeat.notes}</dd>
            <dt>Battery Cables</dt>
            <dd>Status: {truckCheck.batteryCables.ok ? 'OK' : 'Not OK'}</dd>
            <dd>Notes: {truckCheck.batteryCables.notes}</dd>
            <dt>Brake Fluid</dt>
            <dd>Status: {truckCheck.brakeFluid.ok ? 'OK' : 'Not OK'}</dd>
            <dd>Notes: {truckCheck.brakeFluid.notes}</dd>
            <dt>Coolant</dt>
            <dd>Status: {truckCheck.coolant.ok ? 'OK' : 'Not OK'}</dd>
            <dd>Notes: {truckCheck.coolant.notes}</dd>
            <dt>Four Wheel Drive</dt>
            <dt>Lights</dt>
            <dt>Lp Tags</dt>
            <dt>Motor Oil</dt>
            <dt>Power Steering Fluid</dt>
            <dt>Insurance</dt>
            <dt>Registration</dt>
          </div>
        }
      </dl>
    </section>
  );
}
