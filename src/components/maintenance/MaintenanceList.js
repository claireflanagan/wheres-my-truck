import React, { Fragment } from 'react';
import { useFirebase } from '../../hooks/useFirebase';
import styles from '../truck/TruckDetail.css';
import { maintenancesCollection, trucksCollection } from '../../services/collections';

export default function MaintenancesList({ match }) {
  const maintenances = useFirebase(maintenancesCollection.orderBy('reportedDate'), []);
  const truck = useFirebase(trucksCollection.doc(match.params.id), {});
  console.log(maintenances);

  const tableRows = maintenances.map((maintenance, i) => {
    return (
      <tr key={i}>
        <td>{maintenance.reportedDate.toDate().toISOString()}</td>
        <td>{maintenance.type}</td>
        <td>{maintenance.issueDescription}</td>
      </tr>
    );
  });
  return (
    <Fragment>
      <h1>{truck.name}</h1>
      <table className={`${styles.table} ${styles.threeColumns}`}>
        <thead>
          <th>Date</th>
          <th>Type</th>
          <th>Notes</th>
        </thead>
        <tbody>
          {tableRows}
        </tbody>
      </table>
    </Fragment>

  );

}
