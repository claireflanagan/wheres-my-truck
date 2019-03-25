import { useEffect } from 'react';

export const useFetch = (fetch) => {
  useEffect(() => {
    fetch();
  }, [false]);
};
