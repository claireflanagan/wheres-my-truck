import { getMaintenances } from '../services/truckApi';

export const MAINTENANCES_LOAD_START = 'MAINTENANCES_LOAD_START';
export const MAINTENANCES_LOAD_END = 'MAINTENANCES_LOAD_END';
export const UPDATE_MAINTENANCES = 'UPDATE_MAINTENANCES';
export const ADD_MAINTENANCE = 'ADD_MAINTENANCE';

export const fetchMaintenancesPromise = (id) => ({
  type: UPDATE_MAINTENANCES,
  loadStart: MAINTENANCES_LOAD_START,
  loadEnd: MAINTENANCES_LOAD_END,
  payload: getMaintenances(id)
});

export const addMaintenance = (truck, maintenance)  => ({
  type: ADD_MAINTENANCE,
  payload: maintenance
});
