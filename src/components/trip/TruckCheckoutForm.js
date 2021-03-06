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
    pickupLocation: '',
    returnLocation: '',
    truckId: '',
    vehicleCheckRef: null,
    trucksList: null,
    vehicleCheck: {},
    user: null
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
      });

    this.setState({ user: this.props.match.params.user });
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
    const { 
      truckId, 
      user, 
      vehicleCheck, 
      startDate, 
      endDate, 
      tripPurpose, 
      pickupLocation, 
      returnLocation
    } = this.state;

    const trip = {
      startDate: startDate,
      endDate: endDate,
      tripPurpose: tripPurpose,
      pickupLocation: pickupLocation,
      returnLocation: returnLocation,
      user: user,
      truckId: truckId,
      active: true
    };

    const vehicleCheckObj = {
      truckId: truckId,
      user: user,
      date: new Date(),
      ...vehicleCheck
    };

    createVehicleCheck(vehicleCheckObj);
    updateTruckLocation(truckId, 'In Use');
    createTrip(trip)
      .then(() => this.props.history.push(ROUTES.HOME.linkTo()));    
  }


  render() {
    const {
      startDate,
      endDate,
      tripPurpose,
      pickupLocation,
      returnLocation,
      vehicleCheckRef,
      trucksList,
      truckId
    } = this.state;

    return (
      <section>
        <h1>Truck Checkout Form</h1>
        <form onSubmit={this.handleSubmit}  className={styles.form}>
          <div className={styles.largeInputs}>
            <p>
              <label>Truck:</label>
              {trucksList &&
              <select
                required
                name="truckId"
                defaultValue={truckId}
                onChange={this.handleChange}>
                <option value=''></option> 
                {trucksList.map(truck => {
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
                name="pickupLocation"
                type="text"
                value={pickupLocation}
                onChange={this.handleChange}
                required
              />
            </p>

            <p>
              <label>Anticipated Return Location:</label>
              <input
                name="returnLocation"
                type="text"
                value={returnLocation}
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
