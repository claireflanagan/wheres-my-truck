import { get, put, post } from './request';

export const signup = email => post('/api/admin/invite', { email });

export const getRole = token => get('/api/admin/role', token);

export const getUsers = (page = 0) => {
  return get(`/api/admin/users?page=${page}`);
};

export const updateRole = (id, role) => put('/api/admin/role', {
  id,
  role
});
