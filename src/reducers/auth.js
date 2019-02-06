import { AUTH_TOKEN_SET } from '../actions/auth';

const initialState = {
  token: ''
};

export default function reducer(state = initialState, { type, payload }) {
  switch(type) {
    case AUTH_TOKEN_SET:
      return { ...state, token: payload };
    default:
      return state;
  }
}
