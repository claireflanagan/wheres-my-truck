import { UPDATE_MAINTENANCES, MAINTENANCES_LOAD_START, MAINTENANCES_LOAD_END } from '../actions/maintenances';

const initialState = {
  list: [],
  loading: false
};

export default function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch(type) {
    case UPDATE_MAINTENANCES:
      return { ...state, list: payload };
    case MAINTENANCES_LOAD_START:
      return { ...state, loading: true };
    case MAINTENANCES_LOAD_END:
      return { ...state, loading: false };
    default: 
      return state;
  }
}
