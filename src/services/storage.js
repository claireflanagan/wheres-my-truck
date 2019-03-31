import { app } from './firebase';
import 'firebase/storage';

const storage = app.storage().ref();

export const truckRegistration = storage.child('registration');
export const truckInsurance = storage.child('insurance');
