import { trucksCollection } from '../services/collections';

export const addTruck = truck => trucksCollection.add(truck)
  .then(snap => snap.get())
  .then(truck => truck.id);
