import TruckDetail from '../components/truck/TruckDetail';
import TrucksTable from '../components/trucks/TrucksTable';
import TrucksList from '../components/trucks/TrucksList';
import ImageDisplay from '../components/truck/ImageDisplay';

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
    Component: TrucksList,
    linkTo: () => '/trucks/list'
  },
  IMAGEDISPLAY: {
    path: '/trucks/:id/:imageType',
    Component: ImageDisplay,
    linkTo: (id, imageType) => `/trucks/${id}/${imageType}`
  }

};
