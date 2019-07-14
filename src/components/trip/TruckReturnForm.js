import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
// import { ROUTES } from '../../routes/routes';
import styles from './TruckCheckoutForm.css';
import { log } from 'util';
import { trucksCollection } from '../../services/collections';

class TruckReturnForm extends Component {
  state = {
    returnLocation: '',
    returnDate: '',
    truck: '',
    trucksRef: []
  }

  componentDidMount() {
    trucksCollection.get()
      .then(snap => {
        snap.forEach(doc => {
          const id = doc.id;
          const data = doc.data();
          data.id = id;
          
          this.setState(prevState => {
            trucksRef: prevState.trucksRef.push(data); 
          });
        });
      });
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  handleSubmit = event => {
    event.preventDefault();
    const trip = this.state;
    // createTrip(trip)
    //   .then(id => this.props.history.push(ROUTES.TRUCK.linkTo(id)));
  }

  render() {
    const {
      returnDate,
      returnLocation,
      truck,
      trucksRef
    } = this.state;

    
    let truckOptions = [];
    if(trucksRef) {
      console.log('hi');
      for(let i = 0; i < 5; i++) {
        console.log(trucksRef[i]);
      }
    }

    // const truckOptions = trucksRef.map(truck => {
    //   return <option value={truck.id} key={truck.id}> hiiiiiiii {truck.name} - {truck.plates}</option>;
    // });

    return (
      <section>
        <h1>Truck Return Form</h1>
        <form onSubmit={this.handleSubmit}  className={styles.form}>
          <div className={styles.largeInputs}> 
            <p>
              <label>Truck:</label>
              {trucksRef &&
              <select
                name="truck"
                onChange={this.handleChange}
              >
                {console.log('trucks', trucksRef)}

                {trucksRef.map(truck => {
                  console.log('truck', truck);
                  return (<option value={truck.id} key={truck.id}> hiiiiiiii {truck.name} - {truck.plates}</option>);
                })}
              </select>}
            </p>
            <p>
              <label>Return Date:</label>
              <input
                name="returnDate"
                type="date"
                value={returnDate}
                onChange={this.handleChange}
                required
                pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"
              />
            </p>
            <p>
              <label>Return Location:</label>
              <input
                name="returnLocation"
                type="text"
                value={returnLocation}
                onChange={this.handleChange}/>
            </p>

          </div>
          <button type="submit">Submit</button>
        </form>
      </section>
    );
  }
}

export default withRouter(TruckReturnForm);
