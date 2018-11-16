import React, { Component } from 'react';
import { getTrucks } from '../../services/truckSearch';

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
            {truck.name}
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
