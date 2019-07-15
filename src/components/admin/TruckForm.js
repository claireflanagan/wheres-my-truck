import React, { Component } from 'react';
import { useFirebase } from '../../hooks/useFirebase';
import { withRouter } from 'react-router-dom';
import { ROUTES } from '../../routes/routes';
import { addTruck } from '../../actions/trucks';
import { trucksCollection } from '../../services/collections';
import Loading from '../commons/Loading';
import styles from './AddTruck.css';

class TruckForm extends Component {
  // let truck = useFirebase(trucksCollection.doc(match.params.id));
  // console.log('truck', truck);
  // if(truck === undefined) return <Loading />;

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
    registrationImg: '',
    insurance: '',
    insuranceImg: ''
  };

  componentDidMount() {
    console.log('id?', this.props.match.params.id);
    if(this.props.match.params.id === undefined) return;
    let truck = useFirebase(trucksCollection.doc(this.props.match.params.id));
    console.log('truck', truck);
    if(truck === undefined) return <Loading />;
  }

  handleFileChange = ({ target }) => {
    this.setState({
      [target.name]: target.value,
      [`${target.name}Img`]: target.files[0]
    });
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const truck = this.state;
    addTruck(truck)
      .then(id => this.props.history.push(ROUTES.TRUCK.linkTo(id)));
  };

  render() {
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
      <section className={styles.TruckForm}>
        <h1>Add a Truck</h1>
        <form onSubmit={this.handleSubmit} className={styles.form}>
          <p>
            <label>Truck Name:</label>
            <input required={true} name="name" type="text" value={name} onChange={this.handleChange} />
          </p>
          <p>
            <label>Current Location:</label>
            <input required={true} name="location" type="text" value={location} onChange={this.handleChange} />
          </p>
          <p>
            <label>Vin:</label>
            <input required={true} name="vin" type="text" value={vin} onChange={this.handleChange} />
          </p>
          <p>
            <label>Plates:</label>
            <input required={true} name="plates" type="text" value={plates} onChange={this.handleChange} />
          </p>
          <p>
            <label>Year:</label>
            <input required={true} name="year" type="year" value={year} onChange={this.handleChange} />
          </p>
          <p>
            <label>Make:</label>
            <input required={true} name="make" type="text" value={make} onChange={this.handleChange} />
          </p>
          <p>
            <label>Model:</label>
            <input required={true} name="model" type="text" value={model} onChange={this.handleChange} />
          </p>
          <p>
            <label>Tire Size:</label>
            <input required={true} name="tireSize" type="number" value={tireSize} onChange={this.handleChange} />
          </p>
          <p>
            <label>Date of Purchase:</label>
            <input required={true} name="boughtDate" type="date" value={boughtDate} onChange={this.handleChange} />
          </p>
          <p>
            <label>Proof of Registration:</label>
            <input name="registration" type="file" accept=".jpg, .png, .svg, .gif" value={registration} onChange={this.handleFileChange} />
          </p>
          <p>
            <label>Proof of Insurance:</label>
            <input name="insurance" type="file" accept=".jpg, .png, .svg, .gif" value={insurance} onChange={this.handleFileChange} />
          </p>
          <button type="submit">Save</button>
        </form>
      </section>
    );
  }
}

export default withRouter(TruckForm);
