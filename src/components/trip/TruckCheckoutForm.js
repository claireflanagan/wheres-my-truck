import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { ROUTES } from '../../routes/routes';
import styles from './TruckCheckoutForm.css';
import { createTrip } from '../../actions/trips';
import { createVehicleCheck } from '../../actions/vehicleCheck';
import { updateTruckLocation } from '../../actions/trucks';
import { vehicleChecksCollection, trucksCollection } from '../../services/collections';
import VehicleCheckItem from './VehicleCheckItem';

class TruckCheckoutForm extends Component {
  state = {
    startDate: '',
    endDate: '',
    tripPurpose: '',
    gotLocation: '',
    endLocation: '',
    truckid: '',
    vehicleCheckRef: null,
    trucksRef: null,
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

  handleVehicleCheckChange = ({ target }) => {
    let vehicleCheck = Object.assign({}, this.state.vehicleCheck);
    let name = target.name.split('-')[0];

    if(!vehicleCheck[name]) vehicleCheck[name] = {};
    if(target.type === 'text') vehicleCheck[name]['comment'] = target.value;
    else if(target.type === 'radio') vehicleCheck[name]['ok'] = target.value;
    this.setState({ vehicleCheck });
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  handleSubmit = event => {
    event.preventDefault();
    const trip = {
      startDate: this.state.startDate,
      endDate: this.state.endDate,
      tripPurpose: this.state.tripPurpose,
      gotLocation: this.state.gotLocation,
      endLocation: this.state.endLocation,
      user: ''
    };

    const vehicleCheck = {
      truckid: this.state.truckid,
      user: '',
      date: new Date(),
      ...this.state.vehicleCheck
    };

    createVehicleCheck(vehicleCheck);
    updateTruckLocation(this.state.truckid, 'In Use');
    createTrip(trip)
      .then(() => this.props.history.push(ROUTES.HOME.linkTo()));
    
  }


  render() {
    const {
      startDate,
      endDate,
      tripPurpose,
      gotLocation,
      endLocation,
      vehicleCheckRef,
      trucksRef
    } = this.state;

    return (
      <section>
        <h1>Truck Checkout Form</h1>
        <form onSubmit={this.handleSubmit}  className={styles.form}>
          <div className={styles.largeInputs}>
            <p>
              <label>Truck:</label>
              {trucksRef &&
              <select
                name="truckid"
                onChange={this.handleChange}>
                {trucksRef.map(truck => {
                  return <option value={truck.id} key={truck.id}>{truck.make}-{truck.model}-{truck.plates}</option>;
                })}
              </select>}
            </p>

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
