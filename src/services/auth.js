import { app } from './firebase';
import 'firebase/auth';
import { usersCollection } from './collections';

export const auth = app.auth();

export const signin = (email, password) => auth.signInWithEmailAndPassword(email, password);

export const signout = () => auth.signOut();

export const subscribe = (userFn, rejectFn) => auth.onAuthStateChanged((user) => {
  if(!user) return rejectFn && rejectFn();
  usersCollection
    .where('email', '==', user.email)
    .get()
    .then(userDoc => {
      return userFn && userFn(userDoc.docs[0] && userDoc.docs[0].data());
    });
});
