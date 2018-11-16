import React, { Component, Fragment } from 'react';
import { getTrucks } from '../../services/truckSearch';
// import Truck from '../truck/Truck';

export default class TruckDetail extends Component {
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
          <Fragment key={truck.id}> 
            <tr>            
              <td>{truck.name}</td>
              <td>{truck.location}</td>
            </tr>         
          </Fragment>
        );
      });
      return (
        <table>
          <th>Truck</th>
          <th>Location</th>
          {trucks}
        </table>
      );
    }
}
