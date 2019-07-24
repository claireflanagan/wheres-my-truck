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
    truckid: '',
    notes: '',
    trucksRef: null,
    trip: {}
  }

  componentDidMount() {
    trucksCollection
      .where('location', '==', 'In Use')
      .get()
      .then(snap => {
        let trucksRef = [];
        snap.forEach(doc => {
          const id = doc.id;
          const data = doc.data();
          data.id = id;
          trucksRef.push(data);
        });
        return trucksRef;
      })
      .then(trucksRef => {
        this.setState({ trucksRef: trucksRef });
      });
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    const updatedTrip = {
      endDate: this.state.returnDate,
      returnLocation: this.state.returnLocation,
      active: false,
      notes: this.state.notes,
      ...this.state.trip
    };

    tripsCollection
      .where('active', '==', true)
      .where('truck', '==', this.state.truckid)
      .get()
      .then(snap => {
        let id = '';
        snap.forEach(doc => {
          id = doc.id;
          const data = doc.data();
          this.setState({ trip: data });
        });
        return id;
      }).catch(error => {
        console.log(error);
      })
      .then(tripid => {
        updateTrip(tripid, updatedTrip);
      });

    updateTruckLocation(this.state.truckid, this.state.returnLocation)
      .then(() => this.props.history.push(ROUTES.HOME.linkTo()));
  }

  render() {
    const {
      returnDate,
      returnLocation,
      trucksRef,
      notes,
      truckid
    } = this.state;

    return (
      <section>
        <h1>Truck Return Form</h1>
        <form onSubmit={this.handleSubmit}  className={styles.form}>
          <div className={styles.largeInputs}> 
            <p>
              <label>Truck:</label>
              {trucksRef &&
              <select
                defaultValue={truckid}
                name="truckid"
                onChange={this.handleChange}>
                <option value=''></option> 
                {trucksRef.map(truck => {
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
