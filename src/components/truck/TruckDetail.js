import React, { Component } from 'react';
import { getTruck } from '../../services/truckSearch';

export default class TruckDetail extends Component {
    state = {
      truck: {}
    };

    fetchTruck = () => {
      getTruck(this.props.match.params.id)
        .then(truck => this.setState({ truck }));
    };

    componentDidMount() {
      this.fetchTruck();
    }

    render() {
      const truck = this.state.truck;
      return (
        <div>
          <h2>{truck.name}</h2>
          <ul>
            <li>{truck.year}</li>
            <li>{truck.make}</li>
            <li>{truck.model}</li>
            <li>{truck.vin}</li>
            <li>{truck.plates}</li>
            <li>{truck.tireSize}</li>
            <li>{truck.boughtDate}</li>
          </ul>
        </div>
      );
    }


}
