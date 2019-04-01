import React from 'react';
import { deleteUser } from '../../../actions/admin';
import styles from './DeleteUserButton.css';

export default function DeleteUserButton({ id }) {
  return (
    <button
      className={styles.DeleteUserButton}
      onClick={deleteUser.bind(null, id)}
    >
      Delete
    </button>
  );
}
