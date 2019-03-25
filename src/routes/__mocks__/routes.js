export const ROUTES = {
  HOME: {
    path: '/',
    Component: () => { },
    linkTo: () => '/'
  },
  AUTH_CALLBACK: {
    path: '/callback',
    Component: () => { },
  },
  TRUCK: {
    path: '/trucks/:id',
    Component: () => { },
    linkTo: id => `/trucks/${id}`
  },
  TRUCKSTABLE: {
    path: '/trucks/table',
    Component: () => { },
    linkTo: () => '/trucks/table'
  },
  TRUCKSLIST: {
    path: '/trucks/list',
    Component: () => { },
    linkTo: () => '/trucks/list'
  },
  IMAGEDISPLAY: {
    path: '/trucks/:id/:imageType',
    Component: () => { },
    linkTo: (id, imageType) => `/trucks/${id}/${imageType}`
  },
  MAINTENANCE_LIST: {
    path: '/trucks/:id/maintenanceList',
    Component: () => { },
    linkTo: id => `/trucks/${id}/maintenanceList`
  },
  ADD_TRUCK: {
    path: '/trucks/addTruck',
    Component: () => { },
    linkTo: () => '/trucks/addTruck'
  },
  INVITE_USERS: {
    path: '/admin/invite',
    Component: () => { },
    linkTo: () => '/admin/invite'
  },
  ALL_USERS: {
    path: '/admin/users',
    Component: () => { },
    linkTo: () => '/admin/users'
  }
};
