import React from 'react';
import styles from './TruckDetail.css';
import { ROUTES } from '../../routes/routes';
import { Link } from 'react-router-dom';
import { useFirebase } from '../../hooks/useFirebase';
import { trucksCollection } from '../../services/collections';
import Loading from '../Loading';

export default function TruckDetail({ match }) {
  const truck = useFirebase(trucksCollection.doc(match.params.id));
  if(!truck) return <Loading />;


  return (
    <div>
      <div className={styles.truckLinks}>
        <Link to={ROUTES.IMAGEDISPLAY.linkTo(truck.id, 'registration')}>Registration</Link>
        <Link to={ROUTES.IMAGEDISPLAY.linkTo(truck.id, 'insurance')}>Insurance</Link>
        <Link to={ROUTES.MAINTENANCE_LIST.linkTo(truck.id)}>Maintenance Records</Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th colSpan="2">{truck.name}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Year:</td>
            <td>{truck.year}</td>
          </tr>
          <tr>
            <td>Make:</td>
            <td>{truck.make}</td>
          </tr>
          <tr>
            <td>Model:</td>
            <td>{truck.model}</td>
          </tr>
          <tr>
            <td>Vin:</td>
            <td>{truck.vin}</td>
          </tr>
          <tr>
            <td>Plates:</td>
            <td>{truck.plates}</td>
          </tr>
          <tr>
            <td>Tire Size:</td>
            <td>{truck.tireSize}</td>
          </tr>
          <tr>
            <td>Year Bought:</td>
            <td>{truck.boughtDate && truck.boughtDate.toDate().toISOString()}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
