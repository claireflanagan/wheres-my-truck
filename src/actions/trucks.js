import { getTrucks } from '../services/truckSearch';

export const TRUCKS_LOAD_START = 'TRUCKS_LOAD_START';
export const TRUCKS_LOAD_END = 'TRUCKS_LOAD_END';
export const UPDATE_TRUCKS = 'UPDATE_TRUCKS';

export const fetchTrucksPromise = () => ({
  type: UPDATE_TRUCKS,
  loadStart: TRUCKS_LOAD_START,
  loadEnd: TRUCKS_LOAD_END,
  payload: getTrucks()
});

