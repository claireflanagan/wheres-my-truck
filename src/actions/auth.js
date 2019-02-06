import { handleAuthorization } from '../services/auth';

export const AUTH_TOKEN_SET = 'AUTH_TOKEN_SET';
export const setToken = () => ({
  type: AUTH_TOKEN_SET,
  payload: handleAuthorization()
});
