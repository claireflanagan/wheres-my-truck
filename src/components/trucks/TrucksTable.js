import React, { Fragment, Component } from 'react';
import tableStyles from '../truck/TruckDetail.css';

export default class TruckDetail extends Component {
  componentDidMount() {
    this.props.getTrucks();
  }
  render() {
    const trucks = this.props.trucks;
    const trucksTable = trucks.map(truck => {
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
      <>
        <h1>Where's my truck?</h1>
        <table className={tableStyles.table}>
          <thead>
            <tr>
              <th className={tableStyles.tableHeader}>Truck:</th>
              <th className={tableStyles.tableHeader}>Location:</th>
            </tr>
          </thead>
          <tbody>
            {trucksTable}
          </tbody>
        </table>
      </>
    );
  }
}
