import { UPDATE_MAINTENANCES, MAINTENANCES_LOAD_START, MAINTENANCES_LOAD_END } from '../actions/maintenances';

const initialState = {
  a0: {
    details: {
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
    },
    maintenances: [
      {
        type: 'oil change',
        date: '2018-10-31',
        notes: 'this was hard!'
      }
    ]
  }
};

export default function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch(type) {
    case UPDATE_MAINTENANCES:
      return { ...state, list: payload.maintenances };
    case MAINTENANCES_LOAD_START:
      return { ...state, loading: true };
    case MAINTENANCES_LOAD_END:
      return { ...state, loading: false };
    default: 
      return state;
  }
}
