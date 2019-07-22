import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { ROUTES } from '../../routes/routes';
import styles from './TruckCheckoutForm.css';
import { createTrip } from '../../actions/trips';
import { vehicleChecksCollection } from '../../services/collections';
import VehicleCheckItem from './VehicleCheckItem';

class TruckCheckoutForm extends Component {
  state = {
    startDate: '',
    endDate: '',
    tripPurpose: '',
    gotLocation: '',
    endLocation: '',
    vehicleCheckRef: [],
    vehicleCheck: {}
  }
  
  componentDidMount() {
    vehicleChecksCollection.limit(1).get()
      .then(snap => {
        snap.forEach(doc => {
          const data = doc.data();
          const checkAttributes = Object.keys(data).reduce((arr, key) => {
            const subObj = { name: key, ...data[key] };
            return arr.concat(subObj);
          }, []);
          this.setState({ vehicleCheckRef: checkAttributes.filter(attribute => attribute.ok !== undefined) });
        });
      });
  }

  handleVehicleCheckChange = ({ target }) => {
    let vehicleCheck = Object.assign({}, this.state.vehicleCheck);
    let name = target.name.split('-')[0];

    if(!vehicleCheck[name]) vehicleCheck[name] = {};
    if(target.type === 'text') vehicleCheck[name]['comment'] = target.value;
    else if(target.type === 'radio') vehicleCheck[name]['ok'] = target.value;
    this.setState({ vehicleCheck });
  }

  handleSubmit = event => {
    event.preventDefault();
    const trip = {
      startDate: this.state.startDate,
      endDate: this.state.endDate,
      tripPurpose: this.state.tripPurpose,
      gotLocation: this.state.gotLocation,
      endLocation: this.state.endLocation
    };

    // const vehicleCheck = {
    //   brakeFluid:
    // }

    createTrip(trip)
      .then(id => this.props.history.push(ROUTES.TRUCK.linkTo(id)));
    
    // createTruck()
  }


  render() {
    const {
      startDate,
      endDate,
      tripPurpose,
      gotLocation,
      endLocation,
      vehicleCheckRef
    } = this.state;

    return (
      <section>
        <h1>Truck Checkout Form</h1>
        <form onSubmit={this.handleSubmit}  className={styles.form}>
          <div className={styles.largeInputs}>
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

          </div>

          <h3>Vehicle Check:</h3>
          {vehicleCheckRef &&
            vehicleCheckRef.map(attribute => (
              <VehicleCheckItem 
                attribute={attribute} 
                key={attribute.name}
                onChange={this.handleVehicleCheckChange}
              />
            ))
          }
          <button type="submit">Submit</button>
        </form>
      </section>
    );
  } 
}

export default withRouter(TruckCheckoutForm);
