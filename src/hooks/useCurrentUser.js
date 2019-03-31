import { useState, useEffect } from 'react';
import { subscribe } from '../services/auth';

export const useCurrentUser = () => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    return subscribe((user) => {
      setCurrentUser(user);
    });
  }, [false]);

  return currentUser;
};
