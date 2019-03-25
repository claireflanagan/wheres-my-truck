import React, { Component, Fragment } from 'react';
import styles from '../truck/TruckDetail.css';

export default class MaintenancesList extends Component {
  componentDidMount() {
    this.props.getMaintenances(this.props.match.params.id);
  }

  render() {
    const { maintenances, truck } = this.props;
    // if(!maintenances || !truck) return null;
    const tableRows = maintenances.map((maintenance, i) => {
      return (
        <tr key={i}>
          <td>{maintenance.dateReported}</td>
          <td>{maintenance.type}</td>
          <td>{maintenance.issueDescription}</td>
        </tr>
      );
    });
    return (
      <Fragment>
        <h1>{truck.name}</h1>
        <table className={`${styles.table} ${styles.threeColumns}`}>
          <thead>
            <th>Date</th>
            <th>Type</th>
            <th>Notes</th>
          </thead>
          <tbody>
            {tableRows}
          </tbody>
        </table>
      </Fragment>

    );
  }

}
