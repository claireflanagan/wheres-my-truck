import { addTruck, ADD_TRUCK } from './addTruck';

describe('add truck', () => {
  it('can create a note action', () => {
    const truck = {
      id: 'a0',
      name: 'Truck 0',
      location: '10th and Couch',
      vin: '1FTFS24Y8PHA25143',
      plates: '876ABC',
      year: 2018,
      make: 'Truck',
      model: 'Big Truck',
      tireSize: 20,
      boughtDate: '2017-09-10',
      registration: 'https://www.dmv.ca.gov/imageserver/dmv/images/vr/regcard_w_arrow2.jpg',
      insurance: 'https://approvedauto.files.wordpress.com/2013/12/id-card-example.jpg'
    };

    const action = addTruck(truck);
    expect(action.type).toEqual(ADD_TRUCK);
    expect(action.payload).toEqual(truck);
  });
});
