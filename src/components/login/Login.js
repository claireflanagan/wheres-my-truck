import React, { useState } from 'react';
import { signin } from '../../services/auth';
import styles from './Login.css';

export default function Login() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    setLoading(true);
    signin(email, password)
      .catch(err => {
        setError(err);
        setLoading(false);
      });
  };

  const updateEmail = ({ target }) => setEmail(target.value);
  const updatePassword = ({ target }) => setPassword(target.value);

  return (
    <section className={styles.Login}>
      {error && <div className={styles.error}>
        {error.message}
      </div>}
      <form onSubmit={handleSubmit}>
        <h1>Log In</h1>
        <input type="text" placeholder="email" onChange={updateEmail} />
        <input type="password" placeholder="password" onChange={updatePassword} />
        <button
          disabled={loading}
          className={loading ? styles.loading : undefined}
        >
          Login
        </button>
      </form>
    </section>
  );
}
