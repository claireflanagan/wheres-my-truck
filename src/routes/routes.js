
import TruckDetail from '../components/truck/TruckDetail';
// import Locations from '../components/locations/Locations';
import Trucks from '../components/trucks/TrucksTable';

export const ROUTES = {
  TRUCK: {
    path: '/trucks/:id',
    Component: TruckDetail,
    linkTo: id => `/trucks/${id}`
  },
  TRUCKS: {
    path: '/trucks',
    Component: Trucks,
    linkTo: () => '/trucks'
  },
};
