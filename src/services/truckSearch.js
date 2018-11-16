import { get } from './request';

export const getTrucks = () => {
  return get('https://car-db.herokuapp.com/trucks')
    .then((trucks) => {
      return {
        trucks: trucks.map(truck => ({
          name: truck.name
        }))
      };
    });
};
