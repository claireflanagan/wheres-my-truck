import React, { Component } from 'react';
import Truck from '../truck/Truck';

export default class TruckList extends Component {
  componentDidMount() {
    this.props.getTrucks();
  }
  
  render() {
    const { trucks } = this.props;
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
  }
}




