import React, { Component } from 'react';
import Truck from '../truck/Truck';

export default class TruckList extends Component {

  render() {
    console.log('hi');
    const trucks = this.props.trucks.map(truck => {
      return (
        <li key={truck.id}>
          <Truck name={truck.name} id={truck.id} />
        </li>
      );
    });
    return (
      <ul>
        {trucks}
      </ul>
    );
  }
}
