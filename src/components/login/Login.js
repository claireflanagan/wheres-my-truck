import React, { useState } from 'react';
import { signin } from '../../services/auth';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    signin(email, password);
  };

  const updateEmail = ({ target }) => setEmail(target.value);
  const updatePassword = ({ target }) => setPassword(target.value);

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="email" onChange={updateEmail} />
      <input type="password" placeholder="password" onChange={updatePassword} />
      <button>Login</button>
    </form>
  );
}
