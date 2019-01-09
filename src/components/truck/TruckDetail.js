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
    console.log('truck4354', truck);
    return (
      <div>
        <div className={styles.truckLinks}>
          <Link to={ROUTES.IMAGEDISPLAY.linkTo(truck.id, 'registration')}>Registration</Link>
          <Link to={ROUTES.IMAGEDISPLAY.linkTo(truck.id, 'insurance')}>Insurance</Link>
          <Link to={ROUTES.MAINTENANCE_LIST.linkTo(truck.id)}>Maintenance Records</Link>
        </div>
        <table className={styles.table}>
          <thead> 
            <tr>
              <th colSpan="2">{truck.name}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Year:</td>
              <td>{truck.year}</td>
            </tr>
            <tr>
              <td>Make:</td>
              <td>{truck.make}</td>
            </tr>
            <tr>
              <td>Model:</td>
              <td>{truck.model}</td>
            </tr>
            <tr>
              <td>Vin:</td>
              <td>{truck.vin}</td>
            </tr>
            <tr>
              <td>Plates:</td>
              <td>{truck.plates}</td>
            </tr>
            <tr>
              <td>Tire Size:</td>
              <td>{truck.tireSize}</td>
            </tr>
            <tr>
              <td>Year Bought:</td>
              <td>{truck.boughtDate}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}


