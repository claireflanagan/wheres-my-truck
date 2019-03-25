import { fetchTruckPromise, GET_TRUCK } from './trucks';

jest.mock('../services/truckApi');
jest.mock('../services/auth.js');


describe('get truck', () => {
  it('can get a truck', () => {
    const action = fetchTruckPromise('a0');
    expect(action.type).toEqual(GET_TRUCK);
  });
});
