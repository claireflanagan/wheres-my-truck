import TruckDetail from '../components/truck/TruckDetail';
import TrucksTable from '../components/trucks/TrucksTable';
import ImageDisplay from '../components/truck/ImageDisplay';
import AllMaintenances from '../containers/maintenences/AllMaintenances';
import AllTrucks from '../containers/trucks/AllTrucks';

export const ROUTES = {
  TRUCK: {
    path: '/trucks/:id',
    Component: TruckDetail,
    linkTo: id => `/trucks/${id}`
  },
  TRUCKSTABLE: {
    path: '/trucks/table',
    Component: TrucksTable,
    linkTo: () => '/trucks/table'
  },
  TRUCKSLIST: {
    path: '/trucks/list',
    Component: AllTrucks,
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
  }

};
