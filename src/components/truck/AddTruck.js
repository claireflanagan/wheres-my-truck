import React, { Fragment, Component } from 'react';
import { withRouter } from 'react-router-dom';
import styles from './AddTruck.css';
import { ROUTES } from '../../routes/routes';

class AddTruck extends Component {
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
      event.preventDefault();
      const truck = this.state;
      console.log('truckk');
      this.props.onSubmit(truck)
        .then((newTruck) => this.props.history.push(ROUTES.TRUCK.linkTo(newTruck.id)));
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
          <form onSubmit={this.handleSubmit} className={styles.form}>
            <p>
              <label>Truck Name:</label>
              <input name="name" type="text" value={name} onChange={this.handleChange}/>
            </p>
            <p>
              <label>Current Location:</label>
              <input name="location" type="text" value={location} onChange={this.handleChange}/>
            </p>
            <p>
              <label>Vin:</label>
              <input name="vin" type="text" value={vin} onChange={this.handleChange}/>
            </p>
            <p>
              <label>Plates:</label>
              <input name="plates" type="text" value={plates} onChange={this.handleChange}/>
            </p>
            <p>
              <label>Year:</label>
              <input name="year" type="year" value={year} onChange={this.handleChange}/>
            </p>
            <p>
              <label>Make:</label>
              <input name="make" type="text" value={make} onChange={this.handleChange}/>
            </p>
            <p>
              <label>Model:</label>
              <input name="model" type="text" value={model} onChange={this.handleChange}/>
            </p>
            <p>
              <label>Tire Size:</label>
              <input name="tireSize" type="number" value={tireSize} onChange={this.handleChange}/>
            </p>
            <p>
              <label>Date of Purchase:</label>
              <input name="boughtDate" type="date" value={boughtDate} onChange={this.handleChange}/>
            </p>
            <p>
              <label>Proof of Registration:</label>
              <input name="registration" type="file" accept=".jpg, .png, .svg, .gif" value={registration} onChange={this.handleChange}/>
            </p>
            <p>
              <label>Proof of Insurance:</label>
              <input name="insurance" type="file" accept=".jpg, .png, .svg, .gif" value={insurance} onChange={this.handleChange}/>
            </p>
            <button type="submit">Save</button>
          </form>
        </Fragment>
      );
    }
}

export default withRouter(AddTruck);
