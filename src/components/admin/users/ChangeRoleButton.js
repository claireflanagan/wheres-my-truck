import React from 'react';
import { changeUserRole } from '../../../actions/admin';
import styles from './ChangeRoleButton.css';

export default function ChangeRoleButton({ id, role }) {
  let newRole = 'admin';
  if(role === 'admin') {
    newRole = 'user';
  }

  return (
    <button
      className={styles.ChangeRoleButton}
      onClick={changeUserRole.bind(null, id, newRole)}
    >
      Make {newRole}
    </button>
  );
}
