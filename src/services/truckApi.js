import { get, post } from './request';

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
  console.log('idinapi', id);
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

export const addTruck = truck => {
  return post(`https://car-db.herokuapp.com/trucks`, truck);
};

export const getMaintenances = id => {
  return get(`https://car-db.herokuapp.com/maintenances/${id}`)
    .then(({ maintenances, details }) => ({
      details,
      maintenances
    }));
};

export const getMaintenance = id => {
  return get(`https://car-db.herokuapp.com/maintenances/${id}`) //what should go here??
    .then(maintenance => ({
      type: maintenance.type,
      date: maintenance.date,
      notes: maintenance.notes
    }));
};


// post createMaintenence which you give a url which will be the same as get mainenences, and the actual maintenance you want to create --- same for truck and issue
// this is what my forms will call eventually by way of an action
