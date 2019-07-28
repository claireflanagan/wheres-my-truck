import React, { useState } from 'react';
import { inviteUser } from '../../../actions/admin';
import styles from '../../trip/TruckCheckoutForm.css';

export default function InviteUser() {
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('user');

  const handleSubmit = event => {
    event.preventDefault();
    inviteUser({ email, role });
    setEmail('');
  };
  const handleEmailChange = ({ target }) => setEmail(target.value);
  const handleRoleChange = ({ target }) => setRole(target.value);

  return (
    <form onSubmit={handleSubmit} className={[styles.form, styles.userForm].join(' ')}>
      <label>Email:</label>
      <input type="email" value={email} onChange={handleEmailChange} />
      <label>Role:</label>
      <select defaultValue={role} onChange={handleRoleChange}>
        <option value="user">user</option>
        <option value="admin">admin</option>
      </select>
      <button>Invite</button>
    </form>
  );
}
