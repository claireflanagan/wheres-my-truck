import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/routes';


export default function Truck({ name, id }) {
  return (
    <div>
      <Link to={ROUTES.TRUCK.linkTo(id)}>{name}</Link>
    </div>
  );
}
