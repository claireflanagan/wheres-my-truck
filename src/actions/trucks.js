import { trucksCollection } from '../services/collections';
import { truckRegistration, truckInsurance } from '../services/storage';

export const addTruck = truck => {
  const truckToAdd = { ...truck };
  delete truckToAdd.registrationImg;
  delete truckToAdd.insuranceImg;

  return trucksCollection.add(truckToAdd)
    .then(snap => snap.get())
    .then(truck => truck.id);
  // .then(id => {
  //   return Promise.all([
  //     truckRegistration.child(id).put(truck.registrationImg),
  //     truckInsurance.child(id).put(truck.insuranceImg)
  //   ]);
  // });
};
