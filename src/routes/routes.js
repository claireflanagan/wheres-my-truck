import TruckCheckoutForm from '../components/trip/TruckCheckoutForm';
import Truck from '../containers/trucks/TruckContainer';
import TrucksTable from '../containers/trucks/TrucksTableContainer';
import ImageDisplay from '../containers/trucks/ImageDisplayContainer';
import AllMaintenances from '../containers/maintenences/TruckMaintenancesContainer';
import TrucksList from '../containers/trucks/TrucksListContainer';
import AddTruck from '../containers/trucks/AddTruckContainer';
import Home from '../components/home/Home';
import Callback from '../containers/auth/Callback';


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
  },
  TRUCK_CHECKOUT_FORM: {
    path: '/trip/truckCheckoutForm',
    Component: TruckCheckoutForm,
    linkTo: () => '/trip/truckCheckoutForm'
  }

};
