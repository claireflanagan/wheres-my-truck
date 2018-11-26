import React, { Fragment } from 'react';
// import { getTrucks } from '../../services/truckSearch';
import styles from './TrucksTable.css';
// import Truck from '../truck/Truck';

const TrucksTable = ({ trucks }) => {
  console.log('trucks', trucks);
  const trucksTable = trucks.map(truck => {
    return (
      <Fragment key={truck.id}> 
        <tr>            
          <td>{truck.name}</td>
          <td>{truck.location}</td>
        </tr>         
      </Fragment>
    );
  });
  return (
    <table className={styles.table}>
      <th>Truck:</th>
      <th>Location:</th>
      {trucksTable}
    </table>
  );
};

export default TrucksTable;

