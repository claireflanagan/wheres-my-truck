import React, { useState, useEffect } from 'react';
// import { ROUTES } from '../../routes/routes';
import { editTruck } from '../../actions/trucks';
import { trucksCollection } from '../../services/collections';
import Loading from '../commons/Loading';
import styles from './AddTruck.css';

export default function TruckForm({ match }) {
  const [truck, setTruck] = useState(null);

  useEffect(() => {
    trucksCollection.doc(match.params.id).get()
      .then(doc => {
        if(doc.exists) {
          setTruck(doc.data());
        } else {
          return <Loading />;
        }
      });
  }, {});

  if(truck === null) {
    return <Loading />;
  }

  if(match.params.id === null) {
    // newTruck = {
    //   name: '',
    //   location: '',
    //   vin: '',
    //   plates: '',
    //   year: '',
    //   make: '',
    //   model: '',
    //   tireSize: '',
    //   boughtDate: '',
    //   registration: '',
    //   registrationImg: '',
    //   insurance: '',
    //   insuranceImg: ''
    // };
  }

  const handleChange = e => {
    console.log('e', e.target.value);
  };

  const handleFileChange = ({ target }) => {
    this.setState({
      [target.name]: target.value,
      [`${target.name}Img`]: target.files[0]
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    editTruck(truck.id, truck)
      .then(() => console.log('edited'));
  };

  return (
    <section className={styles.TruckForm}>
      <h1>Edit Truck</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <p>
          <label>Truck Name:</label>
          <input required={true} name="name" type="text" value={truck.name} onChange={e => (e)} />
        </p>
        <p>
          <label>Current Location:</label>
          <input required={true} name="location" type="text" value={truck.location} onChange={handleChange} />
        </p>
        <p>
          <label>Vin:</label>
          <input required={true} name="vin" type="text" value={truck.vin} onChange={handleChange} />
        </p>
        <p>
          <label>Plates:</label>
          <input required={true} name="plates" type="text" value={truck.plates} onChange={handleChange} />
        </p>
        <p>
          <label>Year:</label>
          <input required={true} name="year" type="year" value={truck.year} onChange={handleChange} />
        </p>
        <p>
          <label>Make:</label>
          <input required={true} name="make" type="text" value={truck.make} onChange={handleChange} />
        </p>
        <p>
          <label>Model:</label>
          <input required={true} name="model" type="text" value={truck.model} onChange={handleChange} />
        </p>
        <p>
          <label>Tire Size:</label>
          <input required={true} name="tireSize" type="number" value={truck.tireSize} onChange={handleChange} />
        </p>
        <p>
          <label>Date of Purchase:</label>
          <input required={true} name="boughtDate" type="date" value={truck.boughtDate} onChange={handleChange} />
        </p>
        <p>
          <label>Proof of Registration:</label>
          <input name="registration" type="file" accept=".jpg, .png, .svg, .gif" value="" onChange={handleFileChange} />
        </p>
        <p>
          <label>Proof of Insurance:</label>
          <input name="insurance" type="file" accept=".jpg, .png, .svg, .gif" value="" onChange={handleFileChange} />
        </p>
        <button type="submit">Save</button>
      </form>
    </section>
  );
}
