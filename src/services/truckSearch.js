import { get } from './request';

export const getTrucks = () => {
  return get('https://car-db.herokuapp.com/trucks')
    .then((trucks) => {
      return {
        trucks: trucks.map(truck => ({
          name: truck.name,
          id: truck.id,
          location: truck.location
        }))
      };
    });
};

export const getTruck = id => {
  return get(`https://car-db.herokuapp.com/trucks/${id}`)
    .then(truck => ({
      id: truck.id,
      name: truck.name,
      location: truck.location,
      vin: truck.vin,
      plates: truck.plates,
      year: truck.year,
      make: truck.make,
      model: truck.model,
      tireSize: truck.tireSize,
      boughtDate: truck.boughtDate,
      registration: truck.registration,
      insurance: truck.insurance
    }));
};
