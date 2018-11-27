import Truck from '../containers/trucks/TruckContainer';
import TrucksTable from '../containers/trucks/TrucksTableContainer';
import ImageDisplay from '../containers/trucks/ImageDisplayContainer';
import AllMaintenances from '../containers/maintenences/AllMaintenances';
import TrucksList from '../containers/trucks/TrucksListContainer';
import AddTruck from '../containers/trucks/AddTruckContainer';
import Home from '../components/home/Home';


export const ROUTES = {
  HOME: {
    path: '/',
    Component: Home,
    linkTo: () => '/'
  },
  TRUCK: {
    path: '/trucks/:id',
    Component: Truck,
    linkTo: id => `/trucks/${id}`
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
    path: '/trucks/:id/:imageType',
    Component: ImageDisplay,
    linkTo: (id, imageType) => `/trucks/${id}/${imageType}`
  },
  MAINTENANCE_LIST: {
    path: '/trucks/:id/maintenanceList',
    Component: AllMaintenances,
    linkTo: id => `/trucks/${id}/maintenanceList`
  },
  ADD_TRUCK: {
    path: '/trucks/addTruck',
    Component: AddTruck,
    linkTo: () => '/trucks/addTruck'
  }

};
