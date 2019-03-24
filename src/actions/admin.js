import { getUsers, updateRole, signup } from '../services/usersApi';

export const ADMIN_FETCH_USERS = 'ADMIN_FETCH_USERS';
export const fetchUsers = () => ({
  type: ADMIN_FETCH_USERS,
  payload: getUsers()
});

export const ADMIN_CHANGE_ROLE = 'ADMIN_SWAP_ROLE';
export const changeRole = (id, role) => ({
  type: ADMIN_CHANGE_ROLE,
  payload: updateRole(id, role)
});

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
