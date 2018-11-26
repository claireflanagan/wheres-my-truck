export const getTrucks = state => {
  return Object.values(state.trucks);
};

export const getTruck = (state, id) => {
  return state.truck[id];
};

export const getImage = (state, id, imageType) => {
  const truck = getTruck(state, id);
  return truck[imageType];
};

