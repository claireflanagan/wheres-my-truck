export const thunk = store => next => action => {
  if(typeof action === 'function') {
    action(store.dispatch, store.getState);  //what is happening here??
  } else {
    return next(action);
  }
};
  
