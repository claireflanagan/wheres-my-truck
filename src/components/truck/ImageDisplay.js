import React from 'react';
import { getTruck } from '../../services/truckSearch';


const ImageDisplay = ({ truck }) => {

    fetchTruck = () => {
      const { imageType } = this.props.match.params;
      getTruck(this.props.match.params.id)
        .then(truck => {
          this.setState({ img: truck[imageType] });
        });
    };
    
    componentDidMount() {
      this.fetchTruck();
    }

    render() {
      const { img } = this.state;
      return (
        <img src={img}/>
      );
    }
}

