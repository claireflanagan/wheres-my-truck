import { AUTH_TOKEN_SET, AUTH_DESTROY_SESSION } from '../actions/auth';

const initialState = {
  token: ''
};

export default function reducer(state = initialState, { type, payload }) {
  switch(type) {
    case AUTH_TOKEN_SET:
      return { ...state, token: payload };
    case AUTH_DESTROY_SESSION:
      return initialState;
    default:
      return state;
  }
}
