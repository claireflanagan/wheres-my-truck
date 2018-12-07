import { getTrucks, getTruck, addTruck } from '../services/truckApi';

export const TRUCKS_LOAD_START = 'TRUCKS_LOAD_START';
export const TRUCKS_LOAD_END = 'TRUCKS_LOAD_END';

export const UPDATE_TRUCKS = 'UPDATE_TRUCKS'; //getTRucks????
export const fetchTrucksPromise = () => ({
  type: UPDATE_TRUCKS,
  loadStart: TRUCKS_LOAD_START,
  loadEnd: TRUCKS_LOAD_END,
  payload: getTrucks()
});


export const GET_TRUCK = 'GET_TRUCK';
export const fetchTruckPromise = (id) => ({
  type: GET_TRUCK,
  loadStart: TRUCKS_LOAD_START,
  loadEnd: TRUCKS_LOAD_END,
  payload: getTruck(id)
});

export const ADD_TRUCK = 'ADD_TRUCK';
export const addTruckPromise = (truck) => ({
  type: ADD_TRUCK,
  loadStart: TRUCKS_LOAD_START,
  loadEnd: TRUCKS_LOAD_END,
  payload: addTruck(truck)
});
