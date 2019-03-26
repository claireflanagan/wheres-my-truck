import { usersCollection } from '../services/collections';

export const inviteUser = user => usersCollection.add(user);
