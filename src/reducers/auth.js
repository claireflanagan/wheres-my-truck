import { AUTH_TOKEN_SET, AUTH_DESTROY_SESSION, AUTH_INVITE_USER_ERROR, AUTH_INVITE_USER, AUTH_INVITE_USER_LOADING, AUTH_INVITE_USER_DONE } from '../actions/auth';

const initialState = {
  token: '',
  role: '',
  inviteError: '',
  inviteLoading: false,
  invitedUser: {}
};

export default function reducer(state = initialState, { type, payload }) {
  switch(type) {
    case AUTH_TOKEN_SET:
      return { ...state, token: payload.token, role: payload.role };
    case AUTH_DESTROY_SESSION:
      return initialState;
    case AUTH_INVITE_USER_LOADING:
      return { ...state, inviteLoading: true };
    case AUTH_INVITE_USER_DONE:
      return { ...state, inviteLoading: false };
    case AUTH_INVITE_USER:
      return { ...state, invitedUser: payload };
    case AUTH_INVITE_USER_ERROR:
      return { ...state, inviteError: payload.error };
    default:
      return state;
  }
}
