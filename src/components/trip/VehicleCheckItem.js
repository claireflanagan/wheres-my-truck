import React, { Component } from 'react';
import styles from './TruckCheckoutForm.css';

class VehicleCheckItem extends Component {
  state = {
    viewComment: false,
    ok: null
  }

  handleToggle = ({ target }) => {
    this.setState(() =>({
      ok: target.value
    }));
  }

  handleClick = () => {
    this.setState(prevState => ({
      viewComment: !prevState['viewComment']
    }));
  }

  render() {
    const { attribute, onChange } = this.props;
    const { viewComment, ok } = this.state;
    const nameDict = {
      acAndHeat: 'AC and Heat',
      batteryCables: 'Battery Cables',
      brakeFluid: 'Brake Fluid',
      coolant: 'Coolant',
      date: 'Date of Last Check',
      fourWheelDrive: 'Four Wheel Drive',
      insurance: 'Insurance',
      lights: 'Lights',
      lpTags: 'LP Tags',
      motorOil: 'Motor Oil',
      powerSteeringFluid: 'Power Steering Fluid',
      registration: 'Registration'   
    };
    return (
      <div className={styles.refs} key={attribute.name}>
        <p className={styles.radioButtonCategoryLabel}>{nameDict[attribute.name]}:</p>
        <div className={styles.radioButtonContainer}>

          <label className={styles.radioLabel + ' ' + styles.ok} htmlFor={`${attribute.name}ok`}>
            <input 
              className={styles.radioButton} 
              type="radio" 
              id={`${attribute.name}ok`} 
              name={`${attribute.name}-ok`} 
              value="true" 
              onChange={(event) => {this.handleToggle(event); onChange(event); }} 
              checked={ok === 'true'}/>
            <i className="far fa-check-circle"></i>
          </label>

          <label className={styles.radioLabel + ' ' + styles.notOk} htmlFor={`${attribute.name}notOk`}>
            <input 
              className={styles.radioButton} 
              type="radio" 
              id={`${attribute.name}notOk`} 
              name={`${attribute.name}-ok`} 
              value="false" 
              onChange={(event) => {this.handleToggle(event); onChange(event); }} 
              checked={ok === 'false'}/>
            <i className="far fa-times-circle"></i>
          </label>

          <label className={styles.radioLabel}  htmlFor={`${attribute.name}Comments`} aria-label="comments"></label>
          { viewComment ?
            <span>
              <i className="far fa-minus-square" onClick={this.handleClick} id={`${attribute.name}`}></i>
              <input 
                className={styles.comments} 
                type="text" id={`${attribute.name}Comment`} 
                name={`${attribute.name}-comment`} 
                placeholder="Comments?" 
                onInput={onChange}/>
            </span>
            : <i className="far fa-plus-square" onClick={this.handleClick} id={`${attribute.name}`}></i>
          }
        </div>
      </div>
    );
  }
}
export default VehicleCheckItem;
