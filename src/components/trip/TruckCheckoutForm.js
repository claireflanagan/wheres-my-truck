import  React, { Fragment, Component } from 'react';
import { withRouter } from 'react-router-dom';
import { ROUTES } from '../../routes/routes';
import styles from './TruckCheckoutForm.css';


class TruckCheckoutForm extends Component {
  state = {
    //userId:  //how do this one? userSchema
    startDate: '',
    endDate: '',
    tripPurpose: '',
    gotLocation: '',
    endLocation: '',
    oilIsOk: ''
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const trip = this.state;
    console.log('sup, truck trip handleSubmit?');
    this.onSubmit(trip)
      .then((newTrip) => this.props.history.push(ROUTES.TRUCK.linkTo(newTrip.id)));

  };

  render() {
    console.log('render truck checkout from');
    const {
      startDate,
      endDate,
      tripPurpose,
      gotLocation,
      endLocation,
      checkOil
    } = this.state;

    return (
      <Fragment>
        <h1>Truck Checkout Form</h1>
        <form onSubmit={this.handleSubmit}  className={styles.form}>

          <p>
            <label>Checkout Date:</label>
            <input name="startDate" type="date" value={startDate} onChange={this.handleChange} required pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"/>
          </p>

          <p>
            <label>Anticipated Return Date:</label>
            <input name="endDate" type="date" value={endDate} onChange={this.handleChange} required pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"/>
          </p>

          <p>
            <label>Trip Purpose:</label>
            <input name="tripPurpose" type="text" value={tripPurpose} onChange={this.handleChange} required/>
          </p>

          <p>
            <label>Pickup Location:</label>
            <input name="gotLocation" type="text" value={gotLocation} onChange={this.handleChange} required/>
          </p>

          <p>
            <label>Anticipated Return Location:</label>
            <input name="endLocation" type="text" value={endLocation} onChange={this.handleChange}/>
          </p>

          <p>
            <label>Fluids:</label>
            <label></label>
            <select name="checkOil" type="checkbox" value={checkOil} onChange={this.handleChange}>
              <option value="" disabled>Select An Option</option>
              <option value="ok">OK</option>
              <option value="notOk">Not OK</option>
            </select>

          </p>



          <button type="submit">Submit</button>

        </form>
      </Fragment>

    );
  } 
}

export default withRouter(TruckCheckoutForm);

