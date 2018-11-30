import React, { Fragment, Component } from 'react';
import styles from './TrucksTable.css';


export default class TruckDetail extends Component {
  componentDidMount() {
    this.props.getTrucks();
  }
  render() {
    const trucks = this.props.trucks;
    console.log('trucks in table', trucks);
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
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Truck:</th>
            <th>Location:</th>
          </tr>
        </thead>
        <tbody>
          {trucksTable}
        </tbody>
      </table>
    );
  }
}
