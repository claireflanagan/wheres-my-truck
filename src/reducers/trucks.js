import { UPDATE_TRUCKS, TRUCKS_LOAD_START, TRUCKS_LOAD_END } from '../actions/trucks';

const initialState = {
  a0: {
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
  }
};

export default function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch(type) {
    case UPDATE_TRUCKS:
      return { ...state, list: payload.trucks };
    case TRUCKS_LOAD_START:
      return { ...state, loading: true };
    case TRUCKS_LOAD_END:
      return { ...state, loading: false };
    default:
      return state;
  }
}
