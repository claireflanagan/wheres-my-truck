import React, { useState } from 'react';

export default function InviteUser() {
  const [email, setEmail] = useState('');

  const handleChange = ({ target }) => setEmail(target.value);

  return (
    <form>
      <input type="email" value={email} onChange={handleChange} />
      <button>Invite</button>
    </form>
  );
}
