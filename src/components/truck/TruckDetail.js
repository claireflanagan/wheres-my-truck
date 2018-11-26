import React from 'react';
import styles from './TruckDetail.css';
import { ROUTES } from '../../routes/routes';
import { Link } from 'react-router-dom';
  

const TruckDetail = ({ truck })  => { 
  return (
    <div>
      <div className={styles.truckLinks}>
        <Link to={ROUTES.IMAGEDISPLAY.linkTo(truck.id, 'registration')}>Registration</Link>
        <Link to={ROUTES.IMAGEDISPLAY.linkTo(truck.id, 'insurance')}>Insurance</Link>
        <Link to={ROUTES.MAINTENANCE_LIST.linkTo(truck.id)}>Maintenance</Link>
      </div>
      <table className={styles.table}>
        <th>{truck.name}</th>
        <tr>
          <td>Year: {truck.year}</td>
        </tr>
        <tr>
          <td>Make: {truck.make}</td>
        </tr>
        <tr>
          <td>Model: {truck.model}</td>
        </tr>
        <tr>
          <td>Vin: {truck.vin}</td>
        </tr>
        <tr>
          <td>Plates: {truck.plates}</td>
        </tr>
        <tr>
          <td>Tire Size: {truck.tireSize}</td>
        </tr>
        <tr>
          <td>Year Bought: {truck.boughtDate}</td>
        </tr>
      </table>
    </div>
  );
};

export default TruckDetail;
