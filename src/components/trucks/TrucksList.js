import React from 'react';
import Truck from '../truck/Truck';

const TrucksList = ({ trucks }) => {
  console.log('trucks', trucks);
  const trucksList = trucks.map(truck => {
    return (
      <li key={truck.id}>
        <Truck name={truck.name} id={truck.id} />
      </li>
    );
  });
  return (
    <ul>
      {trucksList}
    </ul>
  );
};

export default TrucksList;
