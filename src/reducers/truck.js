import { GET_TRUCK } from '../actions/trucks';

const initialState = {
  truck: {},
  loading: false
};

export default function reducer(state = initialState, { type, payload }) {
  switch(type) {
    case GET_TRUCK:
      return { ...state, truck: payload }; //????
    default:
      return state;
  }
}
// actions reducers then match dispatch to props