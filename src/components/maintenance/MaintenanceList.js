import React, { Component, Fragment } from 'react';
import styles from './MaintenanceList.css';
import { getMaintenances } from '../../services/truckSearch';

export default class MaintenancesList extends Component {
    state = {
      maintenances: [],
      details: {}
    };

    fetchMaintenances = () => {
      getMaintenances(this.props.match.params.id)
        .then(({ details, maintenances }) => this.setState({ maintenances, details })); 
    };

    componentDidMount() {
      this.fetchMaintenances();
    }

    render() {
      const { maintenances, details } = this.state;
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
          <h1>{details.name}</h1> 
          <table className={styles.maintTable}>
            <th>Date</th>
            <th>Type</th>
            <th>Notes</th>
            {tableRows}
          </table>
        </Fragment>
     
      );
    }

}
