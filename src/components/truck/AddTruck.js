import React, { Fragment, Component } from 'react';

export default class AddTruck extends Component {
    state = {
      name: '',
      location: '',
      vin: '',
      plates: '',
      year: '',
      make: '',
      model: '',
      tireSize: '',
      boughtDate: '',
      registration: '',
      insurance: ''
    };

    handleChange = ({ target }) => {
      this.setState({ [target.name]: target.value });
    };

    handleSubmit = event => {
      const truck = this.state;
      event.preventDefault();
      this.props.onSubmit({ truck });
    };

    render() {
      console.log('hi');
      const { 
        name, 
        location, 
        vin, 
        plates, 
        year, 
        make, 
        model, 
        tireSize, 
        boughtDate, 
        registration, 
        insurance 
      } = this.state;

      return (
        <Fragment>
          <h1>Add a Truck</h1>
          <form onSubmit={this.handleSubmit}>
            <p>
              <label>Truck Name:</label>
              <input name="truckName" type="text" value={name}/>
            </p>
            <p>
              <label>Current Location:</label>
              <input name="location" type="text" value={location}/>
            </p>
            <p>
              <label>Vin:</label>
              <input name="vin" type="text" value={vin}/>
            </p>
            <p>
              <label>Plates:</label>
              <input name="plates" type="text" value={plates}/>
            </p>
            <p>
              <label>Year:</label>
              <input name="year" type="year" value={year}/>
            </p>
            <p>
              <label>Make:</label>
              <input name="make" type="text" value={make}/>
            </p>
            <p>
              <label>Model:</label>
              <input name="model" type="text" value={model}/>
            </p>
            <p>
              <label>Tire Size:</label>
              <input name="tireSize" type="number" value={tireSize}/>
            </p>
            <p>
              <label>Bought Date:</label>
              <input name="boughtDate" type="date" value={boughtDate}/>
            </p>
            <p>
              <label>Proof of Registration:</label>
              <input name="registration" type="file" accept=".jpg, .png, .svg, .gif" value={registration}/>
            </p>
            <p>
              <label>Proof of Insurance:</label>
              <input name="insurance" type="file" accept=".jpg, .png, .svg, .gif" value={insurance}/>
            </p>
            <button type="submit">Save</button>
          </form>
        </Fragment>
      );
    }
}
