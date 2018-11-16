import React, { Component } from 'react';
import { getTrucks } from '../../services/truckSearch';
import Truck from '../truck/Truck';

export default class TruckList extends Component {
    state = {
      trucks: []
    };

    fetchTrucks = () => {
      getTrucks()
        .then((trucks) => this.setState(trucks));
    };
  
    componentDidMount() {
      this.fetchTrucks();
    }

    render() {
      const trucks = this.state.trucks.map(truck => {
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
