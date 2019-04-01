import React from 'react';
import { useFirebase } from '../../hooks/useFirebase';
import { maintenancesCollection, trucksCollection } from '../../services/collections';
import Loading from '../commons/Loading';
import Table from '../commons/Table';

export default function MaintenancesList({ match }) {
  const maintenances = useFirebase(maintenancesCollection.orderBy('reportedDate'), null);
  const truck = useFirebase(trucksCollection.doc(match.params.id), {});

  if(!maintenances) return <Loading />;

  const rows = maintenances.map(maint => ({
    ...maint,
    reportedDate: maint.reportedDate.toDate().toISOString()
  }));

  const headers = [
    { display: 'Date', key: 'reportedDate' },
    { display: 'Type', key: 'type' },
    { display: 'Notes', key: 'issueDescription' }
  ];
  return (
    <>
      <h1>{truck.name}</h1>
      <Table
        headers={headers}
        rows={rows}
      />
    </>
  );

}
