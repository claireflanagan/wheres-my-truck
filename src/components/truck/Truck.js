import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/routes';


export default function Truck({ name, id }) {
  return (
    <div>
      <h3>{name}</h3>
      <Link to={ROUTES.TRUCK.linkTo(id)}>Get Details</Link>
    </div>
  );
}
