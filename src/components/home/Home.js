import React from 'react';
import {
    Link
} from 'react-router-dom';
import {
    ROUTES
} from '../../routes/routes';
import styles from './Home.css';

export default function Home() {
    return ( <
        div className = {
            styles.mainNav
        } >
        <
        Link to = {
            ROUTES.TRUCKSLIST.linkTo()
        } > < i class = "fas fa-info-circle" > < /i><span>Truck Info</span > < /Link>
        <
        Link to = {
            ROUTES.TRUCKSTABLE.linkTo()
        } > < i class = "fas fa-map-marker-alt" > < /i><span>Where's my truck?</span > < /Link>
        <
        Link to = {
            ROUTES.ADD_TRUCK.linkTo()
        }
        className = {
            styles.add
        } > < i class = "fas fa-plus" > < /i><span>Add New Truck</span > < /Link> <
        /div>
    );
}
