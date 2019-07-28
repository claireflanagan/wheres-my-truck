import React from 'react';
import { Route } from 'react-router-dom';
import TrucksList from '../components/trucks/TrucksList';
import TruckDetail from '../components/truck/TruckDetail';
import TrucksTable from '../components/trucks/TrucksTable';
import TruckCheckoutForm from '../components/trip/TruckCheckoutForm';
import TripDetail from '../components/trip/TripDetail';
import ImageDisplay from '../components/truck/ImageDisplay';
import MaintenancesList from '../components/maintenance/MaintenanceList';
import Home from '../components/home/Home';
import InviteUser from '../components/admin/users/InviteUser';
import UsersList from '../components/admin/users/UsersList';
import AddTruck from '../components/admin/AddTruck';
import TruckReturnForm from '../components/trip/TruckReturnForm';

export const ROUTES = {
  HOME: {
    path: '/',
    Component: Home,
    linkTo: () => '/'
  },
  TRUCK: {
    path: '/truck/:id',
    Component: TruckDetail,
    linkTo: id => `/truck/${id}`
  },
  TRUCKSTABLE: {
    path: '/trucks/table',
    Component: TrucksTable,
    linkTo: () => '/trucks/table'
  },
  TRUCKSLIST: {
    path: '/trucks/list',
    Component: TrucksList,
    linkTo: () => '/trucks/list'
  },
  TRUCKCHECKOUT: {
    path: '/trip/checkout/:user',
    Component: TruckCheckoutForm,
    linkTo: user => `/trip/checkout/${user}`
  },
  TRUCKRETURN: {
    path: '/trip/return',
    Component: TruckReturnForm,
    linkTo: () => '/trip/return'
  },
  TRIP: {
    path: '/trip/:id',
    Component: TripDetail,
    linkTo: id => `/trip/${id}`
  },
  IMAGEDISPLAY: {
    path: '/truck/:id/:imageType(registration|insurance)',
    Component: ImageDisplay,
    linkTo: (id, imageType) => `/truck/${id}/${imageType}`
  },
  MAINTENANCE_LIST: {
    path: '/truck/:id/maintenanceList',
    Component: MaintenancesList,
    linkTo: id => `/truck/${id}/maintenanceList`
  },
  ADD_TRUCK: {
    path: '/admin/addTruck',
    Component: AddTruck,
    linkTo: () => '/admin/addTruck'
  },
  INVITE_USERS: {
    path: '/admin/invite',
    Component: InviteUser,
    linkTo: () => '/admin/invite'
  },
  ALL_USERS: {
    path: '/admin/users',
    Component: UsersList,
    linkTo: () => '/admin/users'
  }
};

export const getRoutes = () => {
  return Object.values(ROUTES).map(route => {
    return <Route
      exact
      key={route.path}
      path={route.path}
      component={route.Component}
    />;
  });
};
