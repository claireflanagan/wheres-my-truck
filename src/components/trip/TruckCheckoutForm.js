import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { ROUTES } from '../../routes/routes';
import styles from './TruckCheckoutForm.css';
import { createTrip } from '../../actions/trips';
import { truckChecksCollection } from '../../services/collections';

class TruckCheckoutForm extends Component {
  state = {
    startDate: '',
    endDate: '',
    tripPurpose: '',
    gotLocation: '',
    endLocation: '',
    oilIsOk: '',
    truckCheckRef: []
  };
  
  componentDidMount() {
    truckChecksCollection.limit(1).get()
      .then(snap => {
        snap.forEach(doc => {
          const data = doc.data();
          const truckAttributes = Object.keys(data).reduce((arr, key) => {
            const subObj = { name: key, ...data[key] };
            return arr.concat(subObj);
          }, []);
          this.setState({ truckCheckRef: truckAttributes.filter(attribute => attribute.label !== undefined) });
        });
      });
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const trip = this.state;
    createTrip(trip)
      .then(id => this.props.history.push(ROUTES.TRUCK.linkTo(id)));

  };

  render() {
    const {
      startDate,
      endDate,
      tripPurpose,
      gotLocation,
      endLocation,
      truckCheckRef
    } = this.state;

    return (
      <section>
        <h1>Truck Checkout Form</h1>
        <form onSubmit={this.handleSubmit}  className={styles.form}>
          <p>
            <label>Checkout Date:</label>
            <input
              name="startDate"
              type="date"
              value={startDate}
              onChange={this.handleChange}
              required
              pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"
            />
          </p>

          <p>
            <label>Anticipated Return Date:</label>
            <input
              name="endDate"
              type="date"
              value={endDate}
              onChange={this.handleChange}
              required
              pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"
            />
          </p>

          <p>
            <label>Trip Purpose:</label>
            <input
              name="tripPurpose"
              type="text"
              value={tripPurpose}
              onChange={this.handleChange}
              required
            />
          </p>

          <p>
            <label>Pickup Location:</label>
            <input
              name="gotLocation"
              type="text"
              value={gotLocation}
              onChange={this.handleChange}
              required
            />
          </p>

          <p>
            <label>Anticipated Return Location:</label>
            <input
              name="endLocation"
              type="text"
              value={endLocation}
              onChange={this.handleChange}/>
          </p>

          {truckCheckRef &&
            truckCheckRef.map(attribute => (
              <div className="refs" key={attribute.label}>
                <p>{attribute.label}:</p>
                <div>
                  <input type="radio" id={attribute.name} name={attribute.name} value="ok"/>
                  <label htmlFor={attribute.name}>Ok</label>
                  <input type="radio" id={attribute.name} name={attribute.name} value="notOk"/>
                  <label htmlFor={attribute.name}>Not ok</label>
                </div>
              </div>
            ))
          }

          <button type="submit">Submit</button>
        </form>
      </section>
    );
  } 
}

export default withRouter(TruckCheckoutForm);
