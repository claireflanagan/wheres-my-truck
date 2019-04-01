import { usersCollection } from '../services/collections';

export const inviteUser = user => usersCollection.add(user);

export const deleteUser = id => usersCollection.doc(id).delete();

export const changeUserRole = (id, role) => usersCollection.doc(id).update({ role });
