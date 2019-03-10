import  React, { Fragment, Component } from 'react';
import { withRouter } from 'react-router-dom';

class TruckCheckoutForm extends Component {
  state = {
    userId: 'not really a string', //how do this one? userSchema
    startDate: '',
    endDate: '',
    tripPurpose: '',
    gotLocation: '',
    endLocation: ''
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const trip = this.state;
    console.log('sup, truck trip handleSubmit?');
    this.props.onSubmit(trip)
      .then (('newTrip?')); //newTrip?????!!
  };

  render() {
    console.log('render truck checkout from');
    const {
      startDate,
      endDate,
      tripPurpose,
      gotLocation,
      endLocation
    } = this.state;

    return (
      <Fragment>
        <h1>Truck Checkout Form</h1>
        <form onSubmit={this.handleSubmit}>

          <p>
            <label>Checkout Date:</label>
            <input name="startDate" type="text" value={startDate} onChange={this.handleChange}/>
          </p>

          <p>
            <label>Return Date:</label>
            <input name="endDate" type="text" value={endDate} onChange={this.handleChange}/>
          </p>

          <p>
            <label>Trip Purpose:</label>
            <input name="tripPurpose" type="text" value={tripPurpose} onChange={this.handleChange}/>
          </p>

          <p>
            <label>Pickup Location:</label>
            <input name="gotLocation" type="text" value={gotLocation} onChange={this.handleChange}/>
          </p>

          <p>
            <label>Return Location:</label>
            <input name="endLocation" type="text" value={endLocation} onChange={this.handleChange}/>
          </p>

          <button type="submit">Submit</button>

        </form>
      </Fragment>

    );
  } 
}

export default withRouter(TruckCheckoutForm);

