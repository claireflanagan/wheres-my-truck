import { app } from './firebase';
import 'firebase/auth';
import { usersCollection } from './collections';

export const auth = app.auth();

export const signin = (email, password) => auth.signInWithEmailAndPassword(email, password);

export const signout = () => auth.signOut();

export const subscribe = (userFn, rejectFn) => auth.onAuthStateChanged((authUser) => {
  if(!authUser) return rejectFn && rejectFn();
  usersCollection
    .where('email', '==', authUser.email)
    .get()
    .then(userDoc => {
      const user = userDoc.docs[0];
      if(!authUser) return rejectFn && rejectFn();
      return userFn && userFn({ ...user.data(), id: user.id });
    });
});
