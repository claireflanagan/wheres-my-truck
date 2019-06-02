import React from 'react';
import styles from './TruckDetail.css';
import { ROUTES } from '../../routes/routes';
import { Link } from 'react-router-dom';
import { useFirebase } from '../../hooks/useFirebase';
import { trucksCollection, truckChecksCollection } from '../../services/collections';
import Loading from '../commons/Loading';

export default function TruckDetail({ match }) {
  const truck = useFirebase(trucksCollection.doc(match.params.id));
  let truckCheck = useFirebase(truckChecksCollection
    .where('truckId', '==', match.params.id)
    .orderBy('date', 'desc')
    .limit(1));
  
  let truckCheckDetail;
  const nameDict = {
    acAndHeat: 'AC and Heat',
    batteryCables: 'Battery Cables',
    brakeFluid: 'Brake Fluid',
    coolant: 'Coolant',
    date: 'Date of Last Check',
    fourWheelDrive: 'Four Wheel Drive',
    insurance: 'Insurance',
    lights: 'Lights',
    lpTags: 'LP Tags',
    motorOil: 'Motor Oil',
    powerSteeringFluid: 'Power Steering Fluid',
    registration: 'Registration'   
  };

  if(truckCheck && truckCheck.length > 0) {
    truckCheck = truckCheck[0];
    const truckCheckKeys = Object.keys(truckCheck);
    
    truckCheckDetail = truckCheckKeys
      .filter((item) => truckCheck[item].notes)
      .map((item, i) => {
        return (
          <div key={i}>      
            <dt>{nameDict[item]} - {truckCheck[item].ok ? 'OK' : 'Not OK'}</dt>
            <dd>Notes: {truckCheck[item].notes}</dd>
          </div>  
        ); 
      });
  }
  else if(!truck) return <Loading />;

  return (
    <section className={styles.TruckDetail}>
      <header>
        <hgroup>
          <h2 className={styles.name}>{truck.name}</h2>
          <h3>{truck.year} {truck.make} {truck.model}</h3>
          <h3><span>Plates:</span> {truck.plates}</h3>
          <h3><span>Last reported location:</span> {truck.location}</h3>
        </hgroup>
        <span className={`${styles.use} ${truck.inUse ? styles.ride : styles.free}`} >
          {truck.inUse ? 'in use' : 'available'}
        </span>
      </header>

      <div className={styles.truckLinks}>
        {truck.registration && <Link to={ROUTES.IMAGEDISPLAY.linkTo(truck.id, 'registration')}>Registration</Link>}
        {truck.insurance && <Link to={ROUTES.IMAGEDISPLAY.linkTo(truck.id, 'insurance')}>Insurance</Link>}
        {/* <Link to={ROUTES.MAINTENANCE_LIST.linkTo(truck.id)}>Maintenance Records</Link> */}
      </div>
      <dl>
        <h2>General Info</h2>
        <dt>Vin</dt>
        <dd>{truck.vin}</dd>
        <dt>Tire Size</dt>
        <dd>{truck.tireSize}</dd>
        <dt>Bought Date</dt>
        <dd>{new Date(truck.boughtDate).toDateString()}</dd>
        {truckCheckDetail &&
          <div>
            <h2>Truck Check Info</h2>
            <dt>Date of Last Truck Check</dt>
            <dd>{truckCheck.date.toDate().toDateString()}</dd>
            {truckCheckDetail.map(detail => (detail))}
          </div>
        }
      </dl>
    </section>
  );
}
