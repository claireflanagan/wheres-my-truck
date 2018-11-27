import React, { Fragment } from 'react';
import styles from './TrucksTable.css';


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

