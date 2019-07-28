import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
// import { ROUTES } from '../../routes/routes';
import styles from './TruckCheckoutForm.css';
import { trucksCollection } from '../../services/collections';
import { tripsCollection } from '../../services/collections';
import { updateTrip } from '../../actions/trips';
import { updateTruckLocation } from '../../actions/trucks';
import { ROUTES } from '../../routes/routes';

class TruckReturnForm extends Component {
  state = {
    returnLocation: '',
    returnDate: '',
    truckId: '',
    notes: '',
    trucksList: null,
    trip: {},
    errorMessage: null
  }

  componentDidMount() {
    trucksCollection
      .where('location', '==', 'In Use')
      .get()
      .then(snap => {
        let trucksList = [];
        snap.forEach(doc => {
          const id = doc.id;
          const data = doc.data();
          data.id = id;
          trucksList.push(data);
        });
        return trucksList;
      })
      .then(trucksList => {
        this.setState({ trucksList: trucksList });
        if(trucksList.length === 0) {
          this.setState({ errorMessage: 'There are no trucks currently checked out. You must checkout a truck before proceeding' });
        }
      });
    
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    tripsCollection
      .where('active', '==', true)
      .where('truckId', '==', this.state.truckId)
      .get()
      .then(snap => {
        let id = '';
        snap.forEach(doc => {
          id = doc.id;
          const data = doc.data();
          this.setState({ trip: data });
          return id;
        });
        return id;
      }).catch(error => {
        console.log(error);
      })
      .then(tripId => {
        const updatedTrip = {
          endDate: this.state.returnDate,
          returnLocation: this.state.returnLocation,
          active: false,
          notes: this.state.notes,
          ...this.state.trip
        };
        updateTrip(tripId, updatedTrip);
      });

    updateTruckLocation(this.state.truckId, this.state.returnLocation)
      .then(() => this.props.history.push(ROUTES.HOME.linkTo()));
  }

  render() {
    const {
      returnDate,
      returnLocation,
      trucksList,
      notes,
      truckId,
      errorMessage
    } = this.state;

    return (
      <section>
        <h1>Truck Return Form</h1>
        <form onSubmit={this.handleSubmit}  className={styles.form}>
          {errorMessage && <h3 className={styles.error}>{errorMessage}</h3>}
          <div className={styles.largeInputs}> 
            <p>
              <label>Truck:</label>
              {trucksList &&
              <select
                required
                defaultValue={truckId}
                name="truckId"
                onChange={this.handleChange}>
                <option value=''></option> 
                {trucksList.map(truck => {
                  return (<option value={truck.id} key={truck.id}>{truck.make}-{truck.model}-{truck.plates}</option>);
                })}
              </select>}
            </p>
            <p>
              <label>Return Date:</label>
              <input
                name="returnDate"
                type="date"
                value={returnDate}
                onChange={this.handleChange}
                required
                pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"
              />
            </p>
            <p>
              <label>Return Location:</label>
              <input
                required
                name="returnLocation"
                type="text"
                value={returnLocation}
                onChange={this.handleChange}/>
            </p>
            <p>
              <label>Notes:</label>
              <input
                name="notes"
                type="text"
                value={notes}
                onChange={this.handleChange}/>
            </p>

          </div>
          <button type="submit">Submit</button>
        </form>
      </section>
    );
  }
}

export default withRouter(TruckReturnForm);
