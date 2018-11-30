import React, { Component } from 'react';
import styles from './TruckDetail.css';
import { ROUTES } from '../../routes/routes';
import { Link } from 'react-router-dom';

  

export default class TruckDetail extends Component { 
  componentDidMount() {
    this.props.getTruck(this.props.match.params.id);
  }
  render() {
    const { truck } = this.props;
    console.log('truck', truck);
    return (
      <div>
        <div className={styles.truckLinks}>
          <Link to={ROUTES.IMAGEDISPLAY.linkTo(truck.id, 'registration')}>Registration</Link>
          <Link to={ROUTES.IMAGEDISPLAY.linkTo(truck.id, 'insurance')}>Insurance</Link>
          <Link to={ROUTES.MAINTENANCE_LIST.linkTo(truck.id)}>Maintenance</Link>
        </div>
        <table className={styles.table}>
          <tbody>
            <tr>
              <th>{truck.name}</th>
            </tr>
            <tr>
              <td>Year: {truck.year}</td>
            </tr>
            <tr>
              <td>Make: {truck.make}</td>
            </tr>
            <tr>
              <td>Model: {truck.model}</td>
            </tr>
            <tr>
              <td>Vin: {truck.vin}</td>
            </tr>
            <tr>
              <td>Plates: {truck.plates}</td>
            </tr>
            <tr>
              <td>Tire Size: {truck.tireSize}</td>
            </tr>
            <tr>
              <td>Year Bought: {truck.boughtDate}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}


