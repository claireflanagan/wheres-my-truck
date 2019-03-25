import {
  ADMIN_FETCH_USERS,
  ADMIN_CHANGE_ROLE,
  AUTH_INVITE_USER_LOADING,
  AUTH_INVITE_USER_DONE,
  AUTH_INVITE_USER,
  AUTH_INVITE_USER_ERROR
} from '../actions/admin';

const initialState = {
  totalUsers: 0,
  users: [],
  inviteError: '',
  inviteLoading: false,
  invitedUser: {}
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case ADMIN_FETCH_USERS:
      return {
        ...state,
        totalUsers: action.payload.totalPages,
        users: action.payload.users
      };
    case ADMIN_CHANGE_ROLE:
      return {
        ...state,
        users: [
          ...state.users.slice(0, state.users.findIndex(user => user.id === action.payload.id)),
          action.payload,
          ...state.users.slice(state.users.findIndex(user => user.id === action.payload.id) + 1)
        ]
      };
    case AUTH_INVITE_USER_LOADING:
      return { ...state, inviteLoading: true };
    case AUTH_INVITE_USER_DONE:
      return { ...state, inviteLoading: false };
    case AUTH_INVITE_USER:
      return { ...state, invitedUser: action.payload };
    case AUTH_INVITE_USER_ERROR:
      return { ...state, inviteError: action.payload.error };
    default:
      return state;
  }
}
