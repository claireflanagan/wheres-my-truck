import React, { Component, Fragment } from 'react';
import styles from './MaintenanceList.css';

export default class MaintenancesList extends Component {
  componentDidMount() {
    console.log('match id', this.props.match.params.id);
    this.props.getMaintenances(this.props.match.params.id);
  }

  render() {
    const { maintenances, truck } = this.props;
    console.log('maintenances', maintenances);
    const tableRows = maintenances.map((maintenance, i) => {
      return (
        <tr key={i}>
          <td>{maintenance.date}</td>
          <td>{maintenance.type}</td>
          <td>{maintenance.notes}</td>
        </tr>
      );
    });
    return (
      <Fragment>  
        <h1>{truck.name}</h1> 
        <table className={styles.maintTable}>
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
