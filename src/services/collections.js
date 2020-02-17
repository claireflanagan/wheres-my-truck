import { app } from './firebase';
import 'firebase/firestore';

export const firestore = app.firestore();

export const trucksCollection = firestore.collection('trucks');
export const usersCollection = firestore.collection('users');
export const maintenancesCollection = firestore.collection('maintenances');
export const issuesCollection = firestore.collection('issues');
export const tripsCollection = firestore.collection('trips');
export const vehicleChecksCollection = firestore.collection('vehicleCheck');
