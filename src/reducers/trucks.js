import { UPDATE_TRUCKS, TRUCKS_LOAD_START, TRUCKS_LOAD_END } from '../actions/trucks';

const initialState = {
  list: [],
  loading: false
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
