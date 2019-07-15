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
    truckCheckRef: [],
    brakeFluidComment: true,
    coolantComment: false,
    acAndHeatComment: false,
    batteryCablesComment: false,
    breakFluidComment: false,
    fourWheelDriveComment: false,
    insuranceComment: false,
    lightsComment: false,
    lpTagsComment: false,
    motorOilComment: false,
    powerSteeringFluidComment: false,
    registrationComment: false
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

  handleClick = ({ target }) => {
    const name = target.id;
    this.setState(prevState => ({
      [`${name}Comment`]: !prevState[`${name}Comment`]
    }));
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
          {truckCheckRef &&
            truckCheckRef.map(attribute => (
              <div className={styles.refs} key={attribute.label}>
                <p className={styles.radioButtonCategoryLabel}>{attribute.label}:</p>
                <div className={styles.radioButtonContainer}>
                  
                  <label className={styles.radioLabel + ' ' + styles.ok} htmlFor={`${attribute.name}ok`}>
                    <input className={styles.radioButton} type="radio" id={`${attribute.name}ok`} name={attribute.name} value="ok"/>
                    <i className="far fa-check-circle"></i>
                  </label>
                  
                  <label className={styles.radioLabel + ' ' + styles.notOk} htmlFor={`${attribute.name}notOk`}>
                    <input className={styles.radioButton} type="radio" id={`${attribute.name}notOk`} name={attribute.name} value="notOk"/>
                    <i className="far fa-times-circle"></i>
                  </label>

                  <label className={styles.radioLabel}  htmlFor={`${attribute.name}Comments`} aria-label="comments"></label>
                  { this.state[`${attribute.name}Comment`] ?
                    <span>
                      <i className="far fa-minus-square" onClick={this.handleClick} id={`${attribute.name}`}></i>
                      <input className={styles.comments} type="text" id={`${attribute.name}Comment`} name={`${attribute.name}`} placeholder="Additional Comments?"/>
                    </span>
                    : <i className="far fa-plus-square" onClick={this.handleClick} id={`${attribute.name}`}></i>
                  }
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
