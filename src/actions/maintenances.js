import { maintenancesCollection } from '../services/collections';

export const addMaintenance = maintenance => maintenancesCollection.add(maintenance);
