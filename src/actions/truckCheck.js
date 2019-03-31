import { truckChecksCollection } from '../services/collections';

export const createTruckCheck = truckCheck => truckChecksCollection.add(truckCheck)
  .then(snap => snap.id);
