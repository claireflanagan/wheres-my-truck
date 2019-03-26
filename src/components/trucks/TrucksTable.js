import React, { Fragment } from 'react';
import { useFirebase } from '../../hooks/useFirebase';
import { trucksCollection } from '../../services/collections';
import tableStyles from '../truck/TruckDetail.css';
import Loading from '../Loading';

export default function TrucksTable() {
  const trucks = useFirebase(trucksCollection);
  if(!trucks) return <Loading />;

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
    <>
      <h1>Where's my truck?</h1>
      <table className={tableStyles.table}>
        <thead>
          <tr>
            <th className={tableStyles.tableHeader}>Truck:</th>
            <th className={tableStyles.tableHeader}>Location:</th>
          </tr>
        </thead>
        <tbody>
          {trucksTable}
        </tbody>
      </table>
    </>
  );
}
