import { tripsCollection } from '../services/collections';

export const createTrip = trip => tripsCollection.add(trip)
  .then(snap => snap.id);

export const updateTrip = (id, trip) => tripsCollection.doc(id).update(trip);
