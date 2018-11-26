import Truck from '../containers/trucks/Truck';
import TrucksTable from '../containers/trucks/TrucksTable';
import ImageDisplay from '../containers/trucks/ImageDisplay';
import AllMaintenances from '../containers/maintenences/AllMaintenances';
import TrucksList from '../containers/trucks/TrucksList';


export const ROUTES = {
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
  }

};
