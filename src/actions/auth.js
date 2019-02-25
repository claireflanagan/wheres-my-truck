import {
  signup,
  handleAuthorization,
  logout
} from '../services/auth';

export const AUTH_INVITE_USER_LOADING = 'AUTH_INVITE_USER_LOADING';
export const AUTH_INVITE_USER_DONE = 'AUTH_INVITE_USER_DONE';
export const AUTH_INVITE_USER_ERROR = 'AUTH_INVITE_USER_ERROR';
export const AUTH_INVITE_USER = 'AUTH_INVITE_USER';
export const inviteUser = email => ({
  type: AUTH_INVITE_USER,
  payload: signup(email),
  loadStart: AUTH_INVITE_USER_LOADING,
  loadEnd: AUTH_INVITE_USER_DONE,
  errorType: AUTH_INVITE_USER_ERROR
});

export const clearInvitedUser = () => ({
  type: AUTH_INVITE_USER,
  payload: {}
});

export const AUTH_TOKEN_SET = 'AUTH_TOKEN_SET';
export const setToken = () => ({
  type: AUTH_TOKEN_SET,
  payload: handleAuthorization()
});

export const AUTH_DESTROY_SESSION = 'AUTH_DESTROY_SESSION';
export const destroySession = () => {
  logout();
  return {
    type: AUTH_DESTROY_SESSION
  };
};
