export const getTrucks = state => {
  return Object.values(state.trucks);
};

export const getTruck = (state, id) => {
  return state.truck[id];
};
