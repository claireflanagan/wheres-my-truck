import { useState, useEffect } from 'react';
import { app } from '../services/firebase';

export const useFirebase = (ref, initialState) => {
  const [data, setData] = useState(initialState);

  useEffect(() => {
    return ref.onSnapshot(snap => {
      if(snap instanceof app.firestore.DocumentSnapshot) {
        setData({ ...snap.data(), id: snap.id });
      } else if(snap instanceof app.firestore.QuerySnapshot) {
        setData(snap.docs.map(doc => ({ ...doc.data(), id: doc.id })));
      }
    });
  }, [false]);

  return data;
};
