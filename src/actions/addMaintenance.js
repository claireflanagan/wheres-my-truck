export const ADD_MAINTENANCE = 'ADD_MAINTENANCE';

export const addMaintenance = (truck, maintenance)  => ({
  type: ADD_MAINTENANCE,
  payload: maintenance
});
