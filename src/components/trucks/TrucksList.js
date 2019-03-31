import React from 'react';
import { useFirebase } from '../../hooks/useFirebase';
import { trucksCollection } from '../../services/collections';
import Truck from '../truck/Truck';
import styles from './TrucksList.css';
import Loading from '../commons/Loading';

export default () => {
  const trucks = useFirebase(trucksCollection);
  if(!trucks) return <Loading />;

  const trucksList = trucks.map(truck => {
    return (
      <li key={truck.id}>
        <Truck
          id={truck.id}
          name={truck.name}
        />
      </li>
    );
  });
  return (
    <>
      <h1>Truck Information</h1>
      <ul className={styles.trucksList}>
        {trucksList}
      </ul>
    </>
  );
};
