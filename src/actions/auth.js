import { handleAuthorization, logout } from '../services/auth';

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
