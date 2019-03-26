import React, { Fragment } from 'react';
import { useFirebase } from '../../hooks/useFirebase';
import { trucksCollection } from '../../services/collections';
import Loading from '../commons/Loading';
import tableStyles from '../truck/TruckDetail.css';
import Table from '../commons/Table';

export default function TrucksTable() {
  const trucks = useFirebase(trucksCollection);
  if(!trucks) return <Loading />;

  const headers = [
    { display: 'Truck:', key: 'name' },
    { display: 'Location', key: 'location' }
  ];

  return (
    <>
      <h1>Where&apos;s my truck?</h1>
      <Table
        headers={headers}
        rows={trucks}
      />
    </>
  );
}
