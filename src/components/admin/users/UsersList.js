import React from 'react';
import { useFirebase } from '../../../hooks/useFirebase';
import { usersCollection } from '../../../services/collections';
import DeleteUserButton from './DeleteUserButton';
import { useCurrentUser } from '../../../hooks/useCurrentUser';
import ChangeRoleButton from './ChangeRoleButton';
import styles from './UsersList.css';
import Loading from '../../Loading';

export default function UsersList() {
  const currentUser = useCurrentUser() || {};
  const users = useFirebase(usersCollection);
  if(!currentUser || !users) return <Loading />;

  const rows = users.map(user => (
    <tr key={user.id}>
      <td>{user.email}</td>
      <td>{user.role}</td>
      <td>{currentUser.id !== user.id && <ChangeRoleButton id={user.id} role={user.role} />}</td>
      <td>{currentUser.id !== user.id && <DeleteUserButton id={user.id} />}</td>
    </tr>
  ));

  return (
    <table className={styles.UsersList}>
      <thead>
        <tr>
          <th>Email</th>
          <th>Role</th>
          <th>Switch Role</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {rows}
      </tbody>
    </table>
  );
}
