import { vehicleChecksCollection } from '../services/collections';

export const createVehicleCheck = vehicleCheck => vehicleChecksCollection.add(vehicleCheck)
  .then(snap => snap.id);
