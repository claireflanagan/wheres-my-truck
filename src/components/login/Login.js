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
      <div className={styles.Logo}>
      <img src="https://res.cloudinary.com/dfgcomb18/image/upload/v1549764837/dude%20wheres%20my%20truck/logo.png" />
      <h1><span>Dude,</span><br />Where&apos;s My Truck?</h1>
      </div>
      {error && <div className={styles.error}>
        {error.message}
      </div>}
      <form onSubmit={handleSubmit}>
<<<<<<< HEAD
        <input type="text" placeholder="email" onChange={updateEmail} autoFocus />
=======
        <h1>Log In</h1>
        <input type="text" placeholder="email" onChange={updateEmail} />
>>>>>>> 54030f43d1382d790e219357a7c232b38a3fd95c
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
