import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
// import { ROUTES } from '../../routes/routes';
import styles from './TruckCheckoutForm.css';
import { trucksCollection } from '../../services/collections';
import { useFirebase } from '../../hooks/useFirebase';
import { tripsCollection } from '../../services/collections';

class TruckReturnForm extends Component {
  state = {
    returnLocation: '',
    returnDate: '',
    truck: '',
    notes: '',
    trucksRef: null
  }

  componentDidMount() {
    trucksCollection.get()
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
    const trip = useFirebase(tripsCollection.doc(this.state.truck));
    console.log('trip', trip);
    // const trip = this.state;
    // createTrip(trip)
    //   .then(id => this.props.history.push(ROUTES.TRUCK.linkTo(id)));
  }

  render() {
    const {
      returnDate,
      returnLocation,
      trucksRef,
      notes
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
                name="truck"
                onChange={this.handleChange}>
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
