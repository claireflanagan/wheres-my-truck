import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { ROUTES } from '../../routes/routes';
import { editTruck } from '../../actions/trucks';
import { trucksCollection } from '../../services/collections';
import Loading from '../commons/Loading';
import styles from './AddTruck.css';

export default function TruckForm({ match }) {
  let [truck, setTruck] = useState(null);
  let history = useHistory();

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
    truck = {
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
  }

  const handleChange = (e, key) => {
    setTruck({ ...truck, [key]: e.target.value });
  };

  const handleFileChange = (e, key) => {
    setTruck({
      ...truck,
      [key]: e.target.value,
      [`${key}Img`]: e.target.files[0]
    });

    console.log('e.target.value', e.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    editTruck(truck.id, truck)
      .then(() => {
        history.push(ROUTES.TRUCK.linkTo(truck.id));
      });
  };

  return (
    <section className={styles.TruckForm}>
      <h1>Edit Truck</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <p>
          <label>Truck Name:</label>
          <input
            required={true}
            name="name"
            type="text"
            value={truck.name}
            onChange={e => handleChange(e, 'name')}
          />
        </p>
        <p>
          <label>Current Location:</label>
          <input
            required={true}
            name="location"
            type="text"
            value={truck.location}
            onChange={e => handleChange(e, 'location')}
          />
        </p>
        <p>
          <label>Vin:</label>
          <input
            required={true}
            name="vin"
            type="text"
            value={truck.vin}
            onChange={e => handleChange(e, 'vin')}
          />
        </p>
        <p>
          <label>Plates:</label>
          <input
            required={true}
            name="plates"
            type="text"
            value={truck.plates}
            onChange={e => handleChange(e, 'plates')}
          />
        </p>
        <p>
          <label>Year:</label>
          <input
            required={true}
            name="year"
            type="year"
            value={truck.year}
            onChange={e => handleChange(e, 'year')}
          />
        </p>
        <p>
          <label>Make:</label>
          <input
            required={true}
            name="make"
            type="text"
            value={truck.make}
            onChange={e => handleChange(e, 'make')}
          />
        </p>
        <p>
          <label>Model:</label>
          <input
            required={true}
            name="model"
            type="text"
            value={truck.model}
            onChange={e => handleChange(e, 'model')}
          />
        </p>
        <p>
          <label>Tire Size:</label>
          <input
            required={true}
            name="tireSize"
            type="number" value={truck.tireSize}
            onChange={e => handleChange(e, 'tireSize')}
          />
        </p>
        <p>
          <label>Date of Purchase:</label>
          <input
            required={true}
            name="boughtDate"
            type="date"
            value={new Date(truck.boughtDate.seconds).toISOString().split('T')[0]}
            onChange={e => handleChange(e, 'boughtDate')}
          />
        </p>
        <p>
          <label>Proof of Registration:</label>
          <input
            name="registration"
            type="file"
            accept=".jpg, .png, .svg, .gif"
            value=""
            onChange={e => handleFileChange(e, 'registration')}
          />
        </p>
        <p>
          <label>Proof of Insurance:</label>
          <input
            name="insurance"
            type="file"
            accept=".jpg, .png, .svg, .gif"
            value=""
            onChange={e => handleFileChange(e, 'insurance')}
          />
        </p>
        <button type="submit">Save</button>
      </form>
    </section>
  );
}
