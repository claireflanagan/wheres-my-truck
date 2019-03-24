import { AUTH_TOKEN_SET, AUTH_DESTROY_SESSION } from '../actions/auth';

const initialState = {
  token: '',
  role: ''
};

export default function reducer(state = initialState, { type, payload }) {
  switch(type) {
    case AUTH_TOKEN_SET:
      return { ...state, token: payload.token, role: payload.role };
    case AUTH_DESTROY_SESSION:
      return initialState;
    default:
      return state;
  }
}
