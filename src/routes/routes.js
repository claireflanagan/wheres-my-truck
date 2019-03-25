import React from 'react';
import { Route } from 'react-router-dom';
import Truck from '../containers/trucks/TruckContainer';
import TrucksTable from '../containers/trucks/TrucksTableContainer';
import ImageDisplay from '../containers/trucks/ImageDisplayContainer';
import AllMaintenances from '../containers/maintenences/TruckMaintenancesContainer';
import TrucksList from '../containers/trucks/TrucksListContainer';
import AddTruck from '../containers/trucks/AddTruckContainer';
import Home from '../containers/home/Home';
import Callback from '../containers/auth/Callback';
import InviteUser from '../containers/admin/InviteUser';
import AdminUsersList from '../containers/admin/AdminUsersList';

export const ROUTES = {
  HOME: {
    path: '/',
    Component: Home,
    linkTo: () => '/'
  },
  AUTH_CALLBACK: {
    path: '/callback',
    Component: Callback
  },
  TRUCK: {
    path: '/truck/:id',
    Component: Truck,
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
  IMAGEDISPLAY: {
    path: '/truck/:id/:imageType',
    Component: ImageDisplay,
    linkTo: (id, imageType) => `/trucks/${id}/${imageType}`
  },
  MAINTENANCE_LIST: {
    path: '/truck/:id/maintenanceList',
    Component: AllMaintenances,
    linkTo: id => `/trucks/${id}/maintenanceList`
  },
  ADD_TRUCK: {
    path: '/trucks/addTruck',
    Component: AddTruck,
    linkTo: () => '/trucks/addTruck'
  },
  INVITE_USERS: {
    path: '/admin/invite',
    Component: InviteUser,
    linkTo: () => '/admin/invite'
  },
  ALL_USERS: {
    path: '/admin/users',
    Component: AdminUsersList,
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
