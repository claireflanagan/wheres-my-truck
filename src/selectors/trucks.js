export const getTrucks = state => {
  return state.trucks.list;
};

export const getTruck = (state) => {
  return state.truck.truck;
};

export const getImage = (state, id, imageType) => {
  const truck = getTruck(state, id);
  return truck[imageType];
};


// selector only gets things out of state, the only way state changes is if you call an action that calls a reducter
