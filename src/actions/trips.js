import { tripsCollection } from '../services/collections';

export const createTrip = trip => tripsCollection.add(trip)
  .then(snap => snap.id);
