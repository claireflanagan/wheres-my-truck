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
    vehicleCheckRef: []
  }
  
  componentDidMount() {
    vehicleChecksCollection.limit(1).get()
      .then(snap => {
        console.log('sanp', snap);
        snap.forEach(doc => {
          const data = doc.data();
          console.log('data', data);
          const checkAttributes = Object.keys(data).reduce((arr, key) => {
            const subObj = { name: key, ...data[key] };
            console.log('subobj', subObj);
            return arr.concat(subObj);
          }, []);
          this.setState({ vehicleCheckRef: checkAttributes.filter(attribute => attribute.ok !== undefined) });
        });
      });
  }

  handleComment = ({ target }) => {
    const { vehicleCheckRef } = this.state;

    for(let i = 0; i < vehicleCheckRef.length; i++) {
      let attribute = vehicleCheckRef[i];
      let comment = attribute.comment;
      console.log('comment', comment);

      if(attribute.name === target.name) {
        console.log('name match', attribute.name);
        this.setState({ [target.name]: target.value });
      }
    }
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

    console.log('vcr', vehicleCheckRef);
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
                onComment={this.handleComment}
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
