import React from 'react';
import { connect } from 'react-redux';
import { getUsers } from '../../selectors/admin';
import { fetchUsers, changeRole } from '../../actions/admin';
import { useFetch } from '../../hooks/useFetch';

function AdminUsersList({ users, fetch, swapRole }) {
  useFetch(fetch);

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Role</th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.role}</td>
            <td><button onClick={swapRole.bind(null, user.id, user.role)}>Swap Role</button></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

const mapStateToProps = state => ({
  users: getUsers(state)
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    dispatch(fetchUsers());
  },
  swapRole(id, oldRole) {
    const role = oldRole === 'admin' ? 'user' : 'admin';
    dispatch(changeRole(id, role));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminUsersList);
